- setup iniziale
    - setup node  (globale, senza nvm)
    - setup angular (globale) 
        - npm install -g @angular/cli
- scaffolding progetto (ng new ...)
        - ng new app
        - (oppure, se non funziona il comando sopra) npx -p @angular/cli ng new app
        - ROUTING YES
- vediamo i file
    - package.json (dipendenze e script)
    - index.html
    - app.module.ts
    - app.routing.ts
    - app.component.ts

- creiamo un servizio (apiService)
    - searchByF
- usiamo il servizio in home.component.ts
==============================================
/** PAGINA DI DETTAGLIO */
- creiamo il componente DrinkComponent (ts/html) copiandolo da HomeComponent
- creiamo la rotta /drink/:id
- aggiungiamo la funzione lookupByI (dettaglio drink per id)
- colleghiamo il drink al componente