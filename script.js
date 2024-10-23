function insertionSort(arr) {
    // On commence avec le deuxième élément (index 1)
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // On prend l'élément à trier
        let j = i - 1; // On commence à regarder les éléments triés

        // Tant que j est valide et que l'élément à j est plus grand que key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // On déplace l'élément vers la droite
            j--; // On passe à l'élément précédent
        }
        arr[j + 1] = key; // On insère key à la bonne position
    }
    return arr; // On retourne le tableau trié
}

// Exemple d'utilisation
const array = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(array)); // Affiche [1, 2, 5, 5, 6, 9]
