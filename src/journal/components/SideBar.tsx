import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useAppSelector } from "../../store"

export const SideBar = ({drawerWidth}: any) => {

  const { displayName } = useAppSelector((state) => state.auth);
  const { notes } = useAppSelector((state) => state.journal);

  return (
    <Box
        component="nav"
        sx={{ width: {sm:drawerWidth}, flexShrink: { sm: 0 } }}
    >

        <Drawer
            variant="permanent" //temporary
            open
            sx={{
                display: { xs: "block" },
                '& .MuiDrawer-paper': { boxSizing: "border-box", width: drawerWidth }
            }}
        >
          
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                className="animate__animated animate__fadeIn animate__faster"
              >
                {displayName}
              </Typography>
            </Toolbar>
            <Divider />

            <List>
              {
                notes.map(note => (
                  <ListItem key={ note.id } disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                            <TurnedInNot />
                        </ListItemIcon>
                        <Grid container>
                          <ListItemText primary={ note.title } />
                          <ListItemText secondary="Lorem ipsum dolor sit amet consectetur, adipisicing elit." /> 
                        </Grid>
                      </ListItemButton>
                  </ListItem>
                ))
              }
            </List>
        </Drawer>

    </Box>
  )
}
