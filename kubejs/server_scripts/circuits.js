ServerEvents.recipes(event => {
    event.forEachRecipe({ mod: "electrodynamics" }, recipe => {
        recipe.replaceInput(
            '#forge:circuits/basic',            // L'ingrédient à remplacer
            '#forge:circuits/electrodynamics_basic' // Le nouvel ingrédient
        )
    });
    event.forEachRecipe({ mod: "assemblyline" }, recipe => {
        recipe.replaceInput(
            '#forge:circuits/basic',            // L'ingrédient à remplacer
            '#forge:circuits/electrodynamics_basic' // Le nouvel ingrédient
        )
    });

    event.forEachRecipe({ mod: "electrodynamics" }, recipe => {
        recipe.replaceInput(
            '#forge:circuits/advanced',            // L'ingrédient à remplacer
            '#forge:circuits/electrodynamics_advanced' // Le nouvel ingrédient
        )
    });
    event.forEachRecipe({ mod: "assemblyline" }, recipe => {
        recipe.replaceInput(
            '#forge:circuits/advanced',            // L'ingrédient à remplacer
            '#forge:circuits/electrodynamics_advanced' // Le nouvel ingrédient
        )
    });

    event.forEachRecipe({ mod: "electrodynamics" }, recipe => {
        recipe.replaceInput(
            '#forge:circuits/elite',            // L'ingrédient à remplacer
            '#forge:circuits/electrodynamics_elite' // Le nouvel ingrédient
        )
    });
    event.forEachRecipe({ mod: "assemblyline" }, recipe => {
        recipe.replaceInput(
            '#forge:circuits/elite',            // L'ingrédient à remplacer
            '#forge:circuits/electrodynamics_elite' // Le nouvel ingrédient
        )
    });

    event.forEachRecipe({ mod: "electrodynamics" }, recipe => {
        recipe.replaceInput(
            '#forge:circuits/ultimate',            // L'ingrédient à remplacer
            '#forge:circuits/electrodynamics_ultimate' // Le nouvel ingrédient
        )
    });
    event.forEachRecipe({ mod: "assemblyline" }, recipe => {
        recipe.replaceInput(
            '#forge:circuits/ultimate',            // L'ingrédient à remplacer
            '#forge:circuits/electrodynamics_ultimate' // Le nouvel ingrédient
        )
    })

    
})





