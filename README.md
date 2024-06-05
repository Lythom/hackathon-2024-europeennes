# Mon europe

Aide pour choisir sa liste aux européennes 2024

Construction de l'outil :

- constitution d'une base documentaire à partir des profession de foi (https://programme-candidats.interieur.gouv.fr/) et d'articles de presse
- Confrontation des incohérences via openai gtp omni (globalement des arguments is en avant ou ignorés selon les listes)
- Constitution d'une liste de questions discriminante sur les valeurs par rapports aux actions annoncées (gpt omni)
- Constitution derrière chaque "oui" ou "non" d'un tableau json des listes éléctorales concernées (gpt omni)
- Constitution d'un json avec la synthèse des programmes de chaque liste éléctorale (gpt omni)
- Création d'un programme pour sauvegarder les réponses aux questions, et établir un score d'affinité avec chaque liste (bibi)

## Constitution d'une base documentaire

- DL des pdfs et assemblage via script python [PDFTextCon.md](doc%2FPDFTextCon.md)
- Copier coller manuels pour constituer un fichier texte de base documentaire [alldocuments.txt](doc%2Falldocuments.txt)

## Confrontation des incohérences via openai gtp omni (globalement des arguments is en avant ou ignorés selon les listes)

- envoi du alldocuments à gtp omni via chatbox
  - "Dans cette liste de documents, identifie les différentes listes électorales. Pour chaque, repère et expose les dissonances entre les documents."
    - Résultats ok
  - "Synthétise de manière exhaustive et précise, à partir de ce corpus de documents uniquement, les mesures des différentes listes. Tous les idées devront être conservée mais sans redondance. Le détail de chaque idée doit être résumé en une petite phrase maximum."
    - [Synthese.md](doc%2FSynthese.md)
  - "Je souhaite choisir pour qui voter. Pose moi 10 questions discriminantes pour éliminer des candidats qui ne proposent pas des choses en accord avec mes valeurs et idées."
    - [Questions.md](doc%2FQuestions.md)
  - Pour chaque de ces question, précise les listes exclues ou favorisées selon la réponse. Réponds au format json en suivant ce exemple :

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

- - - [questions.json](src%2Fdata%2Fquestions.json)
  - "J'aimerais que tu reformules la dernière synthèse de chaque partie que tu as faite au format json
    clé=nom (le même que dans le json des question)
    valeur=chaine de caractère qui contient la synthèse, avec si disponible un lien vers le site web du programme complet."
    - [lists.json](src%2Fdata%2Fslists.json)

## Création d'un programme pour sauvegarder les réponses aux questions, et établir un score d'affinité avec chaque liste (bibi)

`npm start`
