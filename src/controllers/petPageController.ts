import { Request, Response } from 'express';
import { Pet } from '../Models/Pet';
import { z } from 'zod';

export const showPetPage = (req: Request, res: Response) => {

    const petName = req.params.name;
    
    try {

        const nameSchema = z.string().min(1);
        const validatedName = nameSchema.parse(petName);
        

        const pet = Pet.getByExactName(validatedName);
        

        if (!pet) {
            console.log(`Pet não encontrado: ${validatedName}`);
            res.redirect('/404');
            return;
        }


        res.render('pages/petPage', {

            banner: {
                title: pet.name,
                background: `/images/${pet.image}`
            },

            pet: {
                ...pet,

                status: {
                    [pet.status]: true
                }
            },

            menu: {
                all: true 
            }
        });

    } catch (error) {

        console.error('Erro ao processar página do pet:', error);
        res.redirect('/');
    }
};