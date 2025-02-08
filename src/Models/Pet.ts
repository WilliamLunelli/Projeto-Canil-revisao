import z from 'zod'


const Petschema = z.object({
    type: z.enum(['dog', 'cat', 'fish']),
    image: z.string().min(2).max(50),
    name: z.string().min(2).max(50),
    color: z.string().min(2).max(50),
    sex: z.enum(['male', 'female']),
    age: z.number().min(0).max(30),
    weight: z.number().positive(),
    vaccinated: z.boolean(),
    description: z.string().min(10).max(100),
    status: z.enum(['available', 'pending', 'adopted']).default('available'),
    createdAt: z.date().default(() => new Date())
})

type Pet = z.infer<typeof Petschema>

const data: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'male',
        age: 3,
        weight: 32.5,
        vaccinated: true,
        description: 'Pastor Alemão dócil e bem treinado. Ótimo com crianças e excelente cão de guarda. Vacinado e vermifugado.',
        status: 'available',
        createdAt: new Date('2024-01-15')
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'male',
        age: 2,
        weight: 28.3,
        vaccinated: true,
        description: 'Labrador jovem e brincalhão. Adora água e é muito carinhoso. Todas as vacinas em dia.',
        status: 'available',
        createdAt: new Date('2024-01-20')
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'female',
        age: 1,
        weight: 3.5,
        vaccinated: true,
        description: 'Spitz alemão pequeno e alegre. Muito inteligente e afetuosa. Ótima companheira.',
        status: 'available',
        createdAt: new Date('2024-01-25')
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'male',
        age: 2,
        weight: 25.0,
        vaccinated: true,
        description: 'Husky energético e amigável. Precisa de espaço e exercícios regulares. Ótimo com famílias ativas.',
        status: 'pending',
        createdAt: new Date('2024-01-28')
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'male',
        age: 4,
        weight: 30.2,
        vaccinated: true,
        description: 'Golden retriever adulto e bem treinado. Extremamente dócil e paciente com crianças.',
        status: 'available',
        createdAt: new Date('2024-02-01')
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'female',
        age: 3,
        weight: 5.8,
        vaccinated: true,
        description: 'Poodle inteligente e elegante. Ótima para apartamentos. Não solta pelos.',
        status: 'available',
        createdAt: new Date('2024-02-05')
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'male',
        age: 2,
        weight: 24.0,
        vaccinated: true,
        description: 'Bulldog tranquilo e amigável. Ótimo com crianças e outros animais. Ideal para apartamentos.',
        status: 'available',
        createdAt: new Date('2024-02-08')
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'male',
        age: 4,
        weight: 4.2,
        vaccinated: true,
        description: 'Gato persa de pelagem longa e densa. Calmo e afetuoso. Ideal para apartamentos.',
        status: 'available',
        createdAt: new Date('2024-02-10')
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'male',
        age: 3,
        weight: 7.5,
        vaccinated: true,
        description: 'Maine Coon de grande porte. Personalidade dócil apesar do tamanho. Muito sociável.',
        status: 'available',
        createdAt: new Date('2024-02-12')
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'female',
        age: 2,
        weight: 4.8,
        vaccinated: true,
        description: 'Gata Bengal ativa e brincalhona. Aparência exótica. Precisa de estimulação mental.',
        status: 'pending',
        createdAt: new Date('2024-02-15')
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'male',
        age: 1,
        weight: 3.8,
        vaccinated: true,
        description: 'Siamês jovem e muito ativo. Comunicativo e sociável. Adora brincar com outros gatos.',
        status: 'available',
        createdAt: new Date('2024-02-18')
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'male',
        age: 2,
        weight: 3.5,
        vaccinated: true,
        description: 'Gato Sphynx sem pelos. Muito afetuoso e necessita de cuidados especiais com a pele.',
        status: 'available',
        createdAt: new Date('2024-02-20')
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'male',
        age: 1,
        weight: 0.002,
        vaccinated: false,
        description: 'Peixe pequeno e colorido, perfeito para aquários comunitários. Muito pacífico.',
        status: 'available',
        createdAt: new Date('2024-02-22')
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'male',
        age: 1,
        weight: 0.003,
        vaccinated: false,
        description: 'Peixe pequeno e ativo. Ideal para aquários comunitários. Muito resistente.',
        status: 'available',
        createdAt: new Date('2024-02-24')
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'male',
        age: 1,
        weight: 0.004,
        vaccinated: false,
        description: 'Peixe útil para manutenção do aquário. Ajuda a manter os vidros limpos.',
        status: 'available',
        createdAt: new Date('2024-02-26')
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'male',
        age: 1,
        weight: 0.003,
        vaccinated: false,
        description: 'Peixe de fundo ativo. Ótimo para aquários comunitários. Ajuda na limpeza.',
        status: 'available',
        createdAt: new Date('2024-02-28')
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'male',
        age: 2,
        weight: 0.015,
        vaccinated: false,
        description: 'Peixe elegante e territorial. Requer aquário espaçoso. Muito bonito.',
        status: 'available',
        createdAt: new Date('2024-03-01')
    }
];

export const Pet = {
    getAll: () => {
        return data;
    },
    getFromType: (type: z.infer<typeof Petschema.shape.type>): Pet[] => {
        try{
            const validatedType = Petschema.shape.type.parse(type);
            return data.filter(item => item.type === validatedType);
        } catch (error) {
            if(error instanceof z.ZodError) {
                console.error('tipo inválido', error.errors);
            }
            return[];
        }
    },
    getFromName: (name: string): Pet[] => {
        try {
            const searchSchema = z.string().min(1);;
            const validatedName = searchSchema.parse(name);

            return data.filter(item => 
                item.name.toLowerCase().indexOf(validatedName.toLowerCase()) > -1);
            
        } catch (error) {
            if(error instanceof z.ZodError){
                console.error('nome inválido para busca', error.errors);
            }
            return [];
        }
    }
};