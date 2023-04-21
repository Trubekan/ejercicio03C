import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Grid, makeStyles, Box, withWidth } from '@material-ui/core';

const estilos = makeStyles((theme) => ({
  fondo: {
    background: theme.palette.secondary,
  },
}));

const Columnas = (props) => {
  const classes = estilos();

  return (
    <View>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor='primary.main'
            color='primary.contrastText'
            p={2}
            textAlign='center'
          >
            {props.width}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor='primary.main'
            color='primary.contrastText'
            p={2}
            textAlign='center'
          >
            {props.width}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor='secondary.main'
            color='secondary.contrastText'
            p={2}
            textAlign='center'
          >
            {props.width}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor='secondary.main'
            color='secondary.contrastText'
            p={2}
            textAlign='center'
          >
            {props.width}
          </Box>
        </Grid>
      </Grid>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Columnas></Columnas>
    </View>
  );
};

export default withWidth()(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
