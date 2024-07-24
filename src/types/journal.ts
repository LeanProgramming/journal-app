export interface INoteContent {
	title: string;
	body: string;
	date: number;
}

export interface INote extends INoteContent {
	id: string;
	imageURLs: string[];
}

export interface INewNote {
	id?: string;
	title?: string;
	body?: string;
	date: number;
	imageURLs?: string[];
}

export interface INoteImageFile {
	lastModified: number;
	lastModifiedDate: Date;
	name: string;
	size: number;
	type: string;
	webkitRelativePath: string;
}
