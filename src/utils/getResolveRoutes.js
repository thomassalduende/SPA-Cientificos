// obtenemos una ruta para manejar el template de las pages

const resolveRoutes = (route) =>{
    if (route.length <= 3){
        //ternarios, como elif
        let validRoute = route === '/' ? route: '/:id';
        return validRoute;
    }

    return `/${route}`//about
}

export default resolveRoutes;



















