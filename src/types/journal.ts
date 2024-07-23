interface INoteContent {
    title: string;
    body: string;
    date: number;
}

interface INote extends INoteContent{
    id: string;
    imageURLs?: string[];
}

interface INewNote{
    id?: string;
    title: string;
    body: string;
    date: number;
    imageURLs?: string[];
}