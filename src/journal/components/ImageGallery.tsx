import { ImageList, ImageListItem } from '@mui/material';

interface IImageGalleryProps {
	images: string[];
}

export const ImageGallery = ({ images }: IImageGalleryProps) => {
	return (
		<ImageList sx={{ width: '100%' }} cols={3}>
			{images.map(img => (
				<ImageListItem key={img}>
					<img
						srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						src={`${img}?w=164&h=164&fit=crop&auto=format`}
						alt='Imagen de la nota'
						loading='lazy'
						style={{ boxSizing: 'content-box' }}
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};
