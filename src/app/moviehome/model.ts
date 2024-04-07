export interface ShowDTO {
    id: string;
    description: string;
    duration: number;
    name: string;
    rating: number;
    genre: GenreDTO;
}

export interface GenreDTO {
    id: number;
    description?: string;
    name?: string;
}


