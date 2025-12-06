ServerEvents.recipes(event => {
    event.remove({ output: 'mekanism:enrichment_chamber'})
    event.shaped(
      Item.of('mekanism:enrichment_chamber'), 
      [
        'ABA',
        'CDE', 
        'ABA'
      ],
      {
        A: 'minecraft:redstone',
        B: 'mekanism:basic_control_circuit',
        C: 'thermal:machine_crystallizer',
        D: 'mekanism:steel_casing',
        E: 'thermal:machine_pulverizer'
      }  
     )
    event.remove({ output: 'mekanism:energized_smelter'})
    event.shaped(
      Item.of('mekanism:energized_smelter'), 
      [
        'ABA',
        'CDC', 
        'ABA'
      ],
      {
        A: 'minecraft:redstone',
        B: 'mekanism:basic_control_circuit',
        C: 'electrodynamics:electricfurnacetriple',
        D: 'mekanism:steel_casing'
      }  
     )
    event.remove({ output: 'mekanism:electrolytic_separator'})
    event.shaped(
      Item.of('mekanism:electrolytic_separator'), 
      [
        'ABA',
        'CDC', 
        'ABA'
      ],
      {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:redstone',
        C: 'mekanism:alloy_infused',
        D: 'electrodynamics:electrolyticseparator'
      }  
     )
    event.remove({ output: 'mekanism:precision_sawmill'})
    event.shaped(
      Item.of('mekanism:precision_sawmill'), 
      [
        'ABA',
        'CDC', 
        'ABA'
      ],
      {
        A: 'minecraft:iron_ingot',
        B: 'mekanism:basic_control_circuit',
        C: 'thermal:machine_sawmill',
        D: 'mekanism:steel_casing'
      }  
     )
    event.remove({ output: 'mekanism:resistive_heater'})
    event.shaped(
      Item.of('mekanism:resistive_heater'), 
      [
        'ABA',
        'BDB', 
        'ACA'
      ],
      {
        A: '#forge:ingots/tin',
        B: 'minecraft:redstone',
        C: 'mekanism:energy_tablet',
        D: 'mekanism:fuelwood_heater'
      }  
     )
    event.remove({ output: 'mekanismgenerators:solar_generator'})
    event.shaped(
      Item.of('mekanismgenerators:solar_generator'), 
      [
        'AAA',
        'BDB', 
        'ECE'
      ],
      {
        A: 'electrodynamics:advancedsolarpanel',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:energy_tablet',
        D: 'minecraft:iron_ingot',
        E: 'mekanism:ingot_osmium'
      }  
     )
    event.remove({ output: 'mekanismgenerators:wind_generator'})
    event.shaped(
      Item.of('mekanismgenerators:wind_generator'), 
      [
        'ABA',
        'BDB', 
        'ECE'
      ],
      {
        A: 'electrodynamics:windmill',
        B: 'mekanism:ingot_osmium',
        C: 'mekanism:basic_control_circuit',
        D: 'mekanism:alloy_infused',
        E: 'mekanism:energy_tablet'
      }  
     )
    event.remove({ output: 'mekanism:chemical_crystallizer'})
    event.shaped(
      Item.of('mekanism:chemical_crystallizer'), 
      [
        'ABA',
        'CDC', 
        'AEA'
      ],
      {
        A: 'mekanism:ingot_refined_obsidian',
        B: 'mekanism:fluorite_gem',
        C: 'mekanism:ultimate_control_circuit',
        D: 'mekanism:steel_casing',
        E: 'electrodynamics:chemicalcrystallizer'
      }  
     )
    event.remove({ output: 'mekanism:chemical_dissolution_chamber'})
    event.shaped(
      Item.of('mekanism:chemical_dissolution_chamber'), 
      [
        'ABA',
        'CDC', 
        'AEA'
      ],
      {
        A: 'mekanism:ingot_refined_obsidian',
        B: 'mekanism:basic_chemical_tank',
        C: 'mekanism:ultimate_control_circuit',
        D: 'mekanism:steel_casing',
        E: 'electrodynamics:mineralwasher'
      }  
     )
    event.remove({ output: 'mekanism:electric_pump'})
    event.shaped(
      Item.of('mekanism:electric_pump'), 
      [
        'AEA',
        'BDB', 
        'CCC'
      ],
      {
        A: 'electrodynamics:electricpump',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:ingot_osmium',
        D: 'mekanism:steel_casing',
        E: 'minecraft:bucket'
      }  
     )































})