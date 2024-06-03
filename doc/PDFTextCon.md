# PDFTextCon

## 1. PDFTextCon

**system**: 

```
Aide moi du mieux possible en répondant à mes questions et en étant critique et logique.
```

**user**: 

```
J'ai une liste de PDF, comment extraire le texte et concaténer leur contenu dans un fichier texte au format
DOCUMENT nomdudoc
// le contenu texte
FIN DU DOCUMENT
```

**assistant**: 

```
Pour extraire le texte des fichiers PDF et les concaténer dans un fichier texte avec le format que vous avez décrit, vous pouvez suivre ces étapes :

1. **Extraction du texte des fichiers PDF :**
   - Vous pouvez utiliser des bibliothèques Python telles que PyPDF2, pdfplumber, ou pdfminer.six pour extraire le texte des fichiers PDF.
   - Voici un exemple simple en utilisant PyPDF2 :


import PyPDF2

def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, "rb") as file:
        pdf = PyPDF2.PdfFileReader(file)
        for page_num in range(pdf.getNumPages()):
            page = pdf.getPage(page_num)
            text += page.extract_text()
    return text


2. **Concaténation du contenu dans un fichier texte :**
   - Une fois que vous avez extrait le texte de chaque PDF, vous pouvez les concaténer dans un fichier texte en respectant le format que vous avez mentionné.
   - Voici un exemple de code pour concaténer le contenu extrait dans un fichier texte :


pdf_files = ["doc1.pdf", "doc2.pdf", "doc3.pdf"]
output_file = "concatenated_text.txt"

with open(output_file, "w", encoding="utf-8") as output:
    for pdf_file in pdf_files:
        text = extract_text_from_pdf(pdf_file)
        output.write(f"DOCUMENT {pdf_file}\n")
        output.write(text)
        output.write("\nFIN DU DOCUMENT\n")


3. **Exécution du script :**
   - Assurez-vous d'avoir les fichiers PDF dans le même répertoire que votre script Python.
   - Exécutez le script pour extraire le texte des PDF et les concaténer dans un fichier texte.

N'oubliez pas d'adapter le code en fonction de vos besoins spécifiques, comme la gestion des chemins de fichiers, la manipulation des erreurs, etc.
```

**user**: 

```
adapte le code proposé pour tout avoir dans un seul fichier et pour lire tous les fichiers *.pdf du répertoire en cours, et indique moi comment installer les dépendances dont j'ai besoin (j'ai juste python 3.12 d'installé)
```

**assistant**: 

```
Pour adapter le code afin de lire tous les fichiers PDF du répertoire en cours et les concaténer dans un seul fichier, vous pouvez utiliser la bibliothèque `glob` pour parcourir les fichiers PDF du répertoire. Voici le code adapté :


import PyPDF2
import glob

def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, "rb") as file:
        pdf = PyPDF2.PdfFileReader(file)
        for page_num in range(pdf.getNumPages()):
            page = pdf.getPage(page_num)
            text += page.extract_text()
    return text

pdf_files = glob.glob("*.pdf")
output_file = "concatenated_text.txt"

with open(output_file, "w", encoding="utf-8") as output:
    for pdf_file in pdf_files:
        text = extract_text_from_pdf(pdf_file)
        output.write(f"DOCUMENT {pdf_file}\n")
        output.write(text)
        output.write("\nFIN DU DOCUMENT\n")


Pour installer les dépendances nécessaires (PyPDF2 et glob), vous pouvez utiliser `pip`, qui est l'outil de gestion des packages de Python. Voici comment installer les dépendances :

1. Ouvrez une invite de commande (cmd) ou un terminal.
2. Exécutez les commandes suivantes pour installer les dépendances :


pip install PyPDF2


Il n'est pas nécessaire d'installer `glob` car c'est un module intégré à Python.

Une fois que vous avez installé les dépendances, vous pouvez exécuter le script Python pour extraire le texte des fichiers PDF du répertoire en cours et les concaténer dans un fichier texte. Assurez-vous que les fichiers PDF que vous souhaitez traiter se trouvent dans le même répertoire que votre script.
```

**user**: 

```
C:\Projets\européennes2024>python merge_pdfs.py
Traceback (most recent call last):
  File "C:\Projets\européennes2024\merge_pdfs.py", line 18, in <module>
    text = extract_text_from_pdf(pdf_file)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Projets\européennes2024\merge_pdfs.py", line 7, in extract_text_from_pdf
    pdf = PyPDF2.PdfFileReader(file)
          ^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Python312\Lib\site-packages\PyPDF2\_reader.py", line 1974, in __init__
    deprecation_with_replacement("PdfFileReader", "PdfReader", "3.0.0")
  File "C:\Python312\Lib\site-packages\PyPDF2\_utils.py", line 369, in deprecation_with_replacement
    deprecation(DEPR_MSG_HAPPENED.format(old_name, removed_in, new_name))
  File "C:\Python312\Lib\site-packages\PyPDF2\_utils.py", line 351, in deprecation
    raise DeprecationError(msg)
PyPDF2.errors.DeprecationError: PdfFileReader is deprecated and was removed in PyPDF2 3.0.0. Use PdfReader instead.
```

**assistant**: 

```
Il semble que vous ayez rencontré une erreur liée à une fonction dépréciée dans la bibliothèque PyPDF2. En effet, la fonction `PdfFileReader` a été remplacée par `PdfReader` dans la version 3.0.0 de PyPDF2. Pour résoudre cette erreur, vous devez utiliser `PdfReader` à la place de `PdfFileReader` dans votre script. Voici comment vous pouvez modifier votre code :


import PyPDF2
import glob

def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, "rb") as file:
        pdf = PyPDF2.PdfReader(file)
        for page_num in range(len(pdf.pages)):
            page = pdf.pages[page_num]
            text += page.extract_text()
    return text

pdf_files = glob.glob("*.pdf")
output_file = "concatenated_text.txt"

with open(output_file, "w", encoding="utf-8") as output:
    for pdf_file in pdf_files:
        text = extract_text_from_pdf(pdf_file)
        output.write(f"DOCUMENT {pdf_file}\n")
        output.write(text)
        output.write("\nFIN DU DOCUMENT\n")


En modifiant `PdfFileReader` en `PdfReader`, vous devriez pouvoir exécuter le script sans rencontrer l'erreur de dépréciation. Assurez-vous d'avoir également installé la version correcte de PyPDF2 (3.0.0 ou supérieure) pour éviter d'autres problèmes liés aux changements de version.
```



--------------------


<a href="https://chatboxai.app" style="display: flex; align-items: center;">
<img src='https://chatboxai.app/icon.png' style='width: 40px; height: 40px; padding-right: 6px'>
<b style='font-size:30px'>Chatbox AI</b>
</a>
