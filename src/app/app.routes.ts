import { Routes } from '@angular/router';
import { InterfazPage } from './features/InterfazPage/InterfazPage';


export const routes: Routes = [


 
    {

        path: "",
        component: InterfazPage

    },

     
    {
       path: "heuristica",
        loadChildren: () =>
            import('./features/heuristica/heuristica.routes')
            .then(m => m.heuristicaRoutes)
    }




];
