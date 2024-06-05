# Mon Europe 2024

Aide pour choisir sa liste aux européennes 2024.

Cet outil a été créé dans le but de susciter la curiosité et d'aider à découvrir des listes qui pourraient vous plaire.

Il n'est en aucun cas fiable ou exempt de biais, même si nous avons tenté de mettre autant que possible les différentes listes sur un pied d'égalité: nous n'avons pas caché de poids ou tenté de mettre en avant nos préférences.

Nous avons profité de ce projet pour faire des expérimentations avec une IA générative: gpt-omni de openai. IA n'est utilisée que pour la construction de la configuration initiale (questions, synthèse des programmes, affectation des listes sur les réponses aux questions), mais le contenu généré a été relu humainement, et l'outil en lui même ne s'appuie sur aucune IA à l'utilisation. Le score par exemple est établi à partir de listes préparamétrées (voir [questions.json](src%2Fdata%2Fquestions.json)).

Construction de l'outil :

- constitution d'une base documentaire à partir des professions de foi (https://programme-candidats.interieur.gouv.fr/) et d'articles de presse
- Confrontation des incohérences via openai gpt-omni (globalement des arguments mis en avant ou ignorés selon les listes)
- Constitution d'une liste de questions discriminantes sur les valeurs par rapport aux actions annoncées (gpt omni)
- Constitution derrière chaque "oui" ou "non" d'un tableau json des listes électorales concernées (gpt omni)
- Constitution d'un json avec la synthèse des programmes de chaque liste électorale (gpt omni)
- Création d'un programme pour sauvegarder les réponses aux questions, et établir un score d'affinité avec chaque liste (bibi)

## Constitution d'une base documentaire

- DL des pdfs et assemblage via script python [PDFTextCon.md](doc%2FPDFTextCon.md)
- Copier-coller manuels pour constituer un fichier texte de base documentaire [alldocuments.txt](doc%2Falldocuments.txt)

## Constitution des syntheses, questions et affectation des listes aux questions

- envoi du alldocuments.txt à gpt-omni via chatbox
  - "Dans cette liste de documents, identifie les différentes listes électorales. Pour chaque, repère et expose les dissonances entre les documents."
    - Résultats ok
  - "Synthétise de manière exhaustive et précise, à partir de ce corpus de documents uniquement, les mesures des différentes listes. Toutes les idées devront être conservées mais sans redondance. Le détail de chaque idée doit être résumé en une petite phrase maximum."
    - [Synthese.md](doc%2FSynthese.md)
  - "Je souhaite choisir pour qui voter. Pose moi 10 questions discriminantes pour éliminer des candidats qui ne proposent pas des choses en accord avec mes valeurs et idées."
    - [Questions.md](doc%2FQuestions.md)
  - Pour chacune de ces questions, précise les listes exclues ou favorisées selon la réponse. Réponds au format json en suivant cet exemple :
    ```
    [
      {
        "question": "Souhaitez-vous rester dans l'UE et renforcer ses institutions ?",
        "yes": [/* lists matching "yes" */],
        "no": [/* lists matching "no" */],
      },
      ...
    ]
    ```
    - [questions.json](src%2Fdata%2Fquestions.json)
  - "J'aimerais que tu reformules la dernière synthèse de chaque partie que tu as faite au format json
    clé=nom (le même que dans le json des question)
    valeur=chaine de caractère qui contient la synthèse, avec si disponible un lien vers le site web du programme complet."
    - [lists.json](src%2Fdata%2Flists.json)

Cette base a ensuite été retravaillée, nous avons revérifié les données produites et réajusté les affectations afin de limiter les biais de sur ou sous représentation (qui existent encore du fait que certaines listes se positionnent sur beaucoup de sujets, et d'autres sur très très peu).


## Création d'un programme pour sauvegarder les réponses aux questions et établir un score d'affinité avec chaque liste

Vite + typescript + react + shadcn

`npm i`

`npm start`
