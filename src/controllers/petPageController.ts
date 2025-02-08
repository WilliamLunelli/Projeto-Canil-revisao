import { Request, Response } from 'express';
import { Pet } from '../Models/Pet';
import { z } from 'zod';

// Esta função lida especificamente com a exibição da página detalhada de um pet
export const showPetPage = (req: Request, res: Response) => {
    // Obtemos o nome do pet a partir dos parâmetros da URL
    const petName = req.params.name;
    
    try {
        // Validamos o nome recebido usando Zod
        const nameSchema = z.string().min(1);
        const validatedName = nameSchema.parse(petName);
        
        // Buscamos o pet específico usando o modelo
        const pet = Pet.getByExactName(validatedName);
        
        // Se não encontrarmos o pet, redirecionamos para a página inicial
        if (!pet) {
            console.log(`Pet não encontrado: ${validatedName}`);
            res.redirect('/');
            return;
        }

        // Renderizamos a página com os dados do pet encontrado
        res.render('pages/petPage', {
            // Configuração do banner mantendo o padrão do site
            banner: {
                title: pet.name,
                background: `/images/${pet.image}`
            },
            // Dados do pet com formatação para o template
            pet: {
                ...pet,
                // Transformamos o status em um objeto para facilitar a renderização condicional
                status: {
                    [pet.status]: true
                }
            },
            // Informação para o menu ativo
            menu: {
                all: true // Mantém o menu "Todos" ativo na navegação
            }
        });

    } catch (error) {
        // Se houver algum erro de validação ou processamento, redirecionamos para a home
        console.error('Erro ao processar página do pet:', error);
        res.redirect('/');
    }
};