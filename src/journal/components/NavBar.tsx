import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useAppDispatch } from '../../store';
import { startLogout } from '../../store/auth';

export const NavBar = ({ drawerWidth }: any) => {
	const dispatch = useAppDispatch();

	const onLogout = () => {
		dispatch(startLogout());
	};

	return (
		<AppBar
			position='fixed'
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px) ` },
				ml: { sm: `${drawerWidth}` },
			}}
		>
			<Toolbar>
				<IconButton
					color='inherit'
					edge='start'
					sx={{ mr: 2, display: { sm: 'none' } }}
				>
					<MenuOutlined />
				</IconButton>

				<Grid
					container
					direction='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Typography variant='h6' noWrap component='div'>
						{' '}
						Journal App{' '}
					</Typography>

					<IconButton color='error' onClick={onLogout}>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
