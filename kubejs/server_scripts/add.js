ServerEvents.recipes(event => {
    event.shaped(
        Item.of('ars_nouveau:apprentice_spell_book'), 
        [
          'ABA',
          'BCB', 
          'ABA'
        ],
        {
          A: 'ars_nouveau:blue_archwood_sapling',
          B: 'ars_nouveau:frostaya_pod',  
          C: 'ars_nouveau:novice_spell_book'
        }
    )

    event.shaped(
      Item.of('cobblefordays:tier_3'), 
      [
        'ABA',
        'DCD', 
        'ABA'
      ],
        {
          A: 'minecraft:copper_ingot',
          B: 'minecraft:iron_ingot',  
          C: 'minecraft:glass',
          D: 'minecraft:gold_ingot'
        }
    )

    event.shaped(
      Item.of('minecraft:iron_ore'), 
      [
        'AAA',
        'ABA', 
        'AAA'
      ],
      {
        A: 'minecraft:cobblestone',
        B: 'thermal:iron_dust'
      }
  )
  event.shaped(
    Item.of('minecraft:copper_ore'), 
    [
      'AAA',
      'ABA', 
      'AAA'
    ],
    {
      A: 'minecraft:cobblestone',
      B: 'thermal:copper_dust'
    }
 )
 event.shaped(
  Item.of('minecraft:gold_ore'), 
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'thermal:gold_dust'
  }
 )
 event.shaped(
  Item.of('minecraft:redstone_ore'), 
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'minecraft:redstone'
  }
 )
 event.shaped(
  Item.of('minecraft:diamond_ore'), 
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'thermal:diamond_dust'
  }
 )
 event.shaped(
  Item.of('minecraft:lapis_ore'), 
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'thermal:lapis_dust'
  }
 )
 event.shaped(
  Item.of('minecraft:dirt'), 
  [
    'AB ',
    'C  ', 
    '   '
  ],
  {
    A: 'minecraft:bone_meal',
    B: 'minecraft:sand',
    C: 'electrodynamics:slag'
  }
 )
 event.shaped(
  Item.of('electrodynamics:motor'), 
  [
    ' A ',
    'CBC', 
    ' A '
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'electrodynamics:coil',
    C: '#forge:wires/insulated_copper'
  }
 )
 event.shaped(
  Item.of('electrodynamics:upgradetransformer'), 
  [
    'ABA',
    'C D', 
    'BBB'
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'thermal:iron_plate',
    C: 'electrodynamics:coil',
    D: 'electrodynamics:wirecopper'
  }
 )
 event.shaped(
  Item.of('electrodynamics:energizedalloyer'), 
  [
    'ABA',
    'BCB', 
    'ADA'
  ],
  {
    A: '#forge:plates/iron',
    B: 'electrodynamics:ceramicplate',
    C: 'electrodynamics:coil',
    D: '#forge:circuits/electrodynamics_basic'
  }
 )
 event.shaped(
  Item.of('electrodynamics:windmill'), 
  [
    ' AB',
    ' C ', 
    'DCD'
  ],
  {
    A: '#forge:gears/iron',
    B: 'electrodynamics:motor',
    C: '#forge:plates/iron',
    D: 'minecraft:iron_ingot'
  }
 )
 event.shaped(
  Item.of('electrodynamics:circuitbasic'), 
  [
    'ABA',
    'BCB', 
    'ABA'
  ],
  {
    A: '#forge:wires/insulated_copper',
    B: 'minecraft:redstone',
    C: '#forge:plates/iron'
  }
 )
 event.custom({
  
    "type": "ars_nouveau:crush",
    "input": {
      "tag": "forge:cobblestone"
    },
    "output": [
      {
        "chance": 1.0,
        "count": 1,
        "item": "minecraft:gravel",
        "maxRange": 1
      },
      {
        "chance": 0.5,
        "count": 1,
        "item": "minecraft:gold_nugget",
        "maxRange": 3
      },
      {
        "chance": 0.8,
        "count": 3,
        "item": "minecraft:iron_nugget",
        "maxRange": 5
      },
      {
        "chance": 0.2,
        "count": 1,
        "item": "minecraft:raw_copper",
        "maxRange": 1
      }
    ],
    "skip_block_place": false
  
 })
 event.custom(
  {
    "type": "ars_nouveau:crush",
    "input": {
      "tag": "forge:sand"
    },
    "output": [
      {
        "chance": 0.2,
        "count": 1,
        "item": "minecraft:clay_ball",
        "maxRange": 1
      },
      {
        "chance": 0.4,
        "count": 1,
        "item": "minecraft:redstone",
        "maxRange": 1
      }
    ],
    "skip_block_place": true
  }
  
 )
 event.custom(
  {
    "type": "integrateddynamics:squeezer",
    "item": "minecraft:iron_ingot",
    "result": {
      "items": [
        {
          "item": "thermal:iron_dust"
        }
      ]
    }
  }
 )
 event.custom(
  {
    "type": "integrateddynamics:squeezer",
    "item": "minecraft:gold_ingot",
    "result": {
      "items": [
        {
          "item": "thermal:gold_dust"
        }
      ]
    }
  }
 )
 event.custom(
  {
    "type": "integrateddynamics:squeezer",
    "item": "minecraft:copper_ingot",
    "result": {
      "items": [
        {
          "item": "thermal:copper_dust"
        }
      ]
    }
  }
 )
 event.custom(
  {
    "type": "integrateddynamics:squeezer",
    "item": "minecraft:lapis_lazuli",
    "result": {
      "items": [
        {
          "item": "thermal:lapis_dust"
        }
      ]
    }
  }
 )
 event.custom(
  {
    "type": "botania:mana_infusion",
    "input": {
      "item": "minecraft:iron_ore"
    },
    "mana": 10000,
    "output": {
      "item": "thermal:tin_ore"
    }
  }
 )
 event.shaped(
  Item.of('thermal:machine_frame'), 
  [
    'ABA',
    'BCB', 
    'ABA'
  ],
  {
    A: '#forge:ingots/steel',
    B: '#forge:glass',
    C: 'thermal:tin_gear'
  }
 )
 event.shaped(
  Item.of('minecraft:diorite'), 
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
  {
    A: 'minecraft:bone_meal',
    B: 'minecraft:cobblestone'
  }
 )
 event.shaped(
  Item.of('thermal:tin_ore'), 
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'thermal:tin_dust'
  }
 )
 event.custom(
  {
    "type": "botania:mana_infusion",
    "input": {
      "item": "minecraft:diamond_ore"
    },
    "mana": 10000,
    "output": {
      "item": "thermal:lead_ore"
    }
  }
 )
 event.shaped(
  Item.of('thermal:lead_ore'), 
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'thermal:lead_dust'
  }
 )
 event.shaped(
  Item.of('thermal:silver_ore'), 
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'thermal:silver_dust'
  }
 ) 
 event.shaped(
  Item.of('thermal:nickel_ore'), 
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'thermal:nickel_dust'
  }
 )
 event.shaped(
  Item.of('thermal:machine_pulverizer'), 
  [
    ' A ',
    'BCB', 
    'DED'
  ],
  {
    A: 'electrodynamics:mineralgrinder',
    B: 'minecraft:flint',
    C: 'thermal:machine_frame',
    D: '#forge:gears/copper',
    E: 'thermal:rf_coil'
  }
 )
 event.shaped(
  Item.of('thermal:machine_furnace'), 
  [
    ' A ',
    'BCB', 
    'DED'
  ],
  {
    A: 'electrodynamics:electricfurnace',
    B: 'minecraft:bricks',
    C: 'thermal:machine_frame',
    D: '#forge:gears/copper',
    E: 'thermal:rf_coil'
  }
 )
 event.shaped(
  Item.of('thermal:machine_smelter'), 
  [
    ' A ',
    'BCB', 
    'DED'
  ],
  {
    A: 'electrodynamics:electricarcfurnace',
    B: 'minecraft:sand',
    C: 'thermal:machine_frame',
    D: '#forge:gears/invar',
    E: 'thermal:rf_coil'
  }
 )
 event.shaped(
  Item.of('minecraft:netherrack'), 
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'thermal:signalum_ingot'
  }
 )
 event.custom(
  {"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":20,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"item":"electrodynamics:circuitultimate"}},"output":{"item":"mekanism:basic_control_circuit"}}
 )
 event.custom(
  {
    "type": "botania:pure_daisy",
    "input": {
      "type": "block",
      "block": "minecraft:lapis_block"
    },
    "output": {
      "name": "integrateddynamics:crystalized_menril_block"
    }
  }
 )
 event.shaped(
  Item.of('integrateddynamics:cable'), 
  [
    'AAA',
    'BCB', 
    'AAA'
  ],
  {
    A: 'integrateddynamics:crystalized_menril_chunk',
    B: 'assemblyline:conveyorbelt',
    C: 'minecraft:redstone'
  }
 )
 event.shaped(
  Item.of('integrateddynamics:coal_generator'), 
  [
    'AB ',
    '   ', 
    '   '
  ],
  {
    A: 'integrateddynamics:energy_battery',
    B: 'electrodynamics:coalgenerator'
  }
 )
 event.shaped(
  Item.of('integrateddynamics:energy_battery'), 
  [
    'ABA',
    'ACA', 
    'ABA'
  ],
  {
    A: 'integrateddynamics:crystalized_menril_block',
    B: 'minecraft:redstone_block',
    C: 'electrodynamics:batterybox'
  }
 )
 event.custom(
  {
    "type": "thermal:bottler",
    "ingredients": [
      {
        "tag": "minecraft:saplings"
      },
      {
        "fluid": "integrateddynamics:menril_resin",
        "amount": 1000
      }
    ],
    "result": [
      {
        "item": "integrateddynamics:menril_sapling"
      }
    ],
    "experience": 0.1
  }
 )
 event.custom(
  {
    "type": "botania:pure_daisy",
    "input": {
      "type": "block",
      "block": "minecraft:gold_block"
    },
    "output": {
      "name": "minecraft:glowstone"
    }
  }
 )
 event.shaped(
  Item.of('powah:dielectric_casing'), 
  [
    'ABA',
    'C C', 
    'ABA'
  ],
  {
    A: 'integrateddynamics:crystalized_menril_chunk',
    B: 'powah:dielectric_rod_horizontal',
    C: 'powah:dielectric_rod'
  }
 )
 event.shaped(
  Item.of('powah:dielectric_rod_horizontal'), 
  [
    'AAA',
    'BBB', 
    'AAA'
  ],
  {
    A: 'powah:dielectric_paste',
    B: 'electrodynamics:rodsteel'
  }  
 )
 event.shaped(
  Item.of('powah:dielectric_rod'), 
  [
    'ABA',
    'ABA', 
    'ABA'
  ],
  {
    A: 'powah:dielectric_paste',
    B: 'electrodynamics:rodsteel'
  }  
 )
 event.shaped(
  Item.of('industrialforegoing:pitiful_generator'), 
  [
    'ABA',
    'CDC', 
    'AEA'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'minecraft:gold_ingot',
    C: 'minecraft:iron_bars',
    D: 'industrialforegoing:machine_frame_pity',
    E: 'integrateddynamics:coal_generator'
  }  
 )
 event.custom(
  {
    "type": "botania:mana_infusion",
    "input": {
      "item": "ars_nouveau:source_gem"
    },
    "mana": 10000,
    "output": {
      "item": "botania:mana_diamond"
    }
  }
 )
 event.custom(
  {
    "type": "botania:mana_infusion",
    "input": {
      "tag": "forge:ingots/steel"
    },
    "mana": 3000,
    "output": {
      "item": "botania:manasteel_ingot"
    }
  }
 )
 event.custom(
  {
    "type": "botania:mana_infusion",
    "input": {
      "tag": "forge:storage_blocks/steel"
    },
    "mana": 27000,
    "output": {
      "item": "botania:manasteel_block"
    }
  }
 )
 event.custom(
  {
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "botania:elementium_block"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      }
    ],
    "mana": 50000,
    "output": {
      "count": 1,
      "item": "electrodynamics:orechromium"
    }
  }
 )

 event.shapeless(
  Item.of('ars_nouveau:ritual_animal_summon'),
  [
   'ars_nouveau:purple_archwood_log',
   '3x ars_nouveau:runic_chalk',
   'minecraft:lapis_block'
  ]
 )
 event.shaped(
  Item.of('industrialforegoing:machine_frame_pity'), 
  [
    'ABA',
    'BCB', 
    'ABA'
  ],
  {
    A: 'botania:dreamwood',
    B: 'electrodynamics:sheetplastic',
    C: 'botania:dragonstone_block'
  }
 )
 event.custom(
  {
    "type": "thermal:press",
    "ingredients": [
      {
        "item": "minecraft:blaze_powder",
        "count": 4
      },
      {
        "item": "thermal:press_packing_2x2_die"
      }
    ],
    "result": [
      {
        "item": "minecraft:blaze_rod"
      }
    ],
    "energy": 400
  }
 )
 event.shapeless(
  Item.of('ars_nouveau:ritual_forestation'),
  [
   'ars_nouveau:green_archwood_log',
   'ars_nouveau:earth_essence',
   'botania:fertilizer'
  ]
 )
 event.shaped(
  Item.of('ars_caelum:ritual_conjure_island_village'), 
  [
    'ABC',
    'DEF', 
    'GH '
  ],
  {
    A: 'ars_nouveau:green_archwood_sapling',
    B: 'ars_nouveau:red_archwood_sapling',
    C: 'ars_nouveau:blue_archwood_sapling',
    D: 'minecraft:amethyst_block',
    E: 'minecraft:diamond_block',
    F: 'ars_nouveau:blue_archwood_log',
    G: 'minecraft:blaze_rod',
    H: 'minecraft:emerald_block'
  }
 )
 event.shapeless(
  Item.of('ars_caelum:ritual_conjure_island_end_portal'),
  [
   'ars_nouveau:purple_archwood_log',
   '7x powah:ender_core',
   'ars_nouveau:wilden_tribute'
  ]
 )
 event.shaped(
  Item.of('ars_caelum:ritual_conjure_island_sculk'), 
  [
    'ABB',
    'BCC', 
    'CCD'
  ],
  {
    A: 'ars_nouveau:purple_archwood_log',
    B: 'minecraft:deepslate',
    C: 'minecraft:amethyst_block',
    D: 'ars_nouveau:wilden_tribute'
  }  
 )
 event.custom(
  {
    "type": "powah:energizing",
    "ingredients": [
    {
      "tag": "forge:ingots/steel"
    },
    {
      "item": "minecraft:gold_ingot"
    }
    ],
    "energy": 10000,
    "result": {
    "item": "powah:steel_energized",
    "count": 2
    }
  }
 )
 event.shaped(
  Item.of('powah:capacitor_basic'), 
  [
    ' BA',
    'BCB', 
    'AB '
  ],
  {
    A: 'powah:dielectric_paste',
    B: 'mekanism:ingot_steel',
    C: 'integrateddynamics:crystalized_menril_block'
  }  
 )
 event.custom(
  {
    "type": "powah:energizing",
    "ingredients": [
    {"item": "refinedstorage:quartz_enriched_iron_block"},
    {"item": "refinedstorage:quartz_enriched_iron_block"},
    {"item": "industrialforegoing:machine_frame_pity"},
    {"item": "refinedstorage:quartz_enriched_iron_block"},
    {"item": "refinedstorage:quartz_enriched_iron_block"}
    ],
    "energy": 100000,
    "result": {
    "item": "refinedstorage:machine_casing"
    }
  }
 )
 event.shaped(
  Item.of('refinedstorage:cable'), 
  [
    'AAA',
    'BCB', 
    'AAA'
  ],
  {
    A: 'refinedstorage:quartz_enriched_iron',
    B: 'integrateddynamics:cable',
    C: 'minecraft:redstone'
  }  
 )
 event.shapeless(
  Item.of('refinedstorage:importer'),
  [
   'refinedstorage:cable',
   'refinedstorage:destruction_core',
   'refinedstorage:improved_processor',
   'integratedtunnels:part_importer_item'
  ]
 )
 event.shapeless(
  Item.of('refinedstorage:exporter'),
  [
   'refinedstorage:cable',
   'refinedstorage:construction_core',
   'refinedstorage:improved_processor',
   'integratedtunnels:part_exporter_item'
  ]
 )
 event.shaped(
  Item.of('industrialforegoing:block_placer'), 
  [
    'ABA',
    'BCB', 
    'ADA'
  ],
  {
    A: 'electrodynamics:sheetplastic',
    B: 'minecraft:dropper',
    C: 'industrialforegoing:machine_frame_pity',
    D: 'assemblyline:blockplacer'
  }  
 )
 event.shaped(
  Item.of('industrialforegoing:block_breaker'),
  [
    'ABA',
    'CDE', 
    'FGF'
  ],
  {
    A: 'electrodynamics:sheetplastic',
    B: 'thermal:gold_gear',
    C: 'minecraft:iron_pickaxe',
    D: 'industrialforegoing:machine_frame_pity',
    E: 'minecraft:iron_shovel',
    F: 'thermal:iron_gear',
    G: 'assemblyline:blockbreaker'
  }  
 )
 event.shaped(
  Item.of('refinedstorage:constructor'), 
  [
    'ABA',
    'ECF', 
    'ADA'
  ],
  {
    A: 'refinedstorage:quartz_enriched_iron',
    B: 'refinedstorage:construction_core',
    C: 'refinedstorage:cable',
    D: 'refinedstorage:improved_processor',
    E: 'integratedtunnels:part_exporter_world_block',
    F: 'industrialforegoing:block_placer'
  }  
 )
 event.shaped(
  Item.of('refinedstorage:destructor'), 
  [
    'ABA',
    'ECF', 
    'ADA'
  ],
  {
    A: 'refinedstorage:quartz_enriched_iron',
    B: 'refinedstorage:destruction_core',
    C: 'refinedstorage:cable',
    D: 'refinedstorage:improved_processor',
    E: 'integratedtunnels:part_importer_world_block',
    F: 'industrialforegoing:block_breaker'
  }  
 )
 event.custom(
  {"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"item":"powah:steel_energized"}},"output":{"item":"mekanism:alloy_infused"}}
 )
 event.shaped(
  Item.of('mekanism:steel_casing'), 
  [
    'ABA',
    'BCB', 
    'ABA'
  ],
  {
    A: 'mekanism:ingot_steel',
    B: 'mekanism:alloy_infused',
    C: 'refinedstorage:machine_casing'
  }  
 )
 event.custom(
  {
    "type": "thermal:crucible",
    "ingredient": {
      "item": "enderio:grains_of_infinity"
    },
    "result": [
      {
        "fluid": "enderio:fire_water",
        "amount": 100
      }
    ],
    "energy": 100
  }
 )
 event.custom(
  {
    "type": "thermal:crystallizer",
    "ingredients": [
      {
        "fluid": "enderio:fire_water",
        "amount": 10
      },
      {
        "item": "minecraft:clay_ball"
      }
    ],
    "result": [
      {
        "item": "enderio:conduit_binder_composite"
      }
    ]
  }
 )
 event.custom(
  {
    "type": "industrialforegoing:dissolution_chamber",
    "input": [
      {
        "item": "industrialforegoing:machine_frame_advanced"
      },
      {
        "item": "enderio:conduit_binder"
      },
      {
        "item": "enderio:conduit_binder"
      },
      {
        "item": "enderio:conduit_binder"
      },
      {
        "item": "enderio:conduit_binder"
      },
      {
        "item": "enderio:conduit_binder"
      },
      {
        "item": "enderio:conduit_binder"
      },
      {
        "item": "enderio:conduit_binder"
      }
    ],
    "inputFluid": "{Amount:1000,FluidName:\"enderio:fire_water\"}",
    "output": {
      "count": 1,
      "item": "enderio:void_chassis"
    },
    "processingTime": 300
  }
 )
 event.shaped(
  Item.of('industrialforegoing:dissolution_chamber'), 
  [
    'ABA',
    'CDC', 
    'EFE'
  ],
  {
    A: 'electrodynamics:sheetplastic',
    B: '#forge:chests',
    C: 'minecraft:bucket',
    D: 'industrialforegoing:machine_frame_pity',
    E: 'minecraft:gold_ingot',
    F: 'thermal:machine_bottler'
  }  
 )
 event.custom(
  {
    "type": "electrodynamics:reinforced_alloyer_recipe",
    "experience": 0.30000001192092896,
    "itembi": {
      "0": {
        "chance": 0.5,
        "count": 1,
        "item": "electrodynamics:slag"
      },
      "count": 1
    },
    "iteminputs": {
      "0": {
        "count": 4,
        "tag": "forge:ingots/steel"
      },
      "1": {
        "count": 16,
        "item": "minecraft:obsidian"
      },
      "count": 2
    },
    "output": {
      "count": 1,
      "item": "enderio:dark_steel_ingot"
    },
    "ticks": 50,
    "usagepertick": 50.0
  }
 )
 event.shaped(
  Item.of('enderio:alloy_smelter'), 
  [
    'ABA',
    'BCB', 
    'DED'
  ],
  {
    A: 'enderio:dark_steel_ingot',
    B: 'minecraft:furnace',
    C: 'enderio:void_chassis',
    D: '#forge:gears/iron',
    E: 'electrodynamics:reinforcedalloyer'
  }  
 )
 event.shaped(
  Item.of('enderio:sag_mill'), 
  [
    'AAA',
    'BCB', 
    'DED'
  ],
  {
    A: 'minecraft:flint',
    B: 'enderio:dark_steel_ingot',
    C: 'enderio:void_chassis',
    D: '#forge:gears/iron',
    E: 'integrateddynamics:mechanical_squeezer'
  }  
 )
 event.shaped(
  Item.of('enderio:stirling_generator'), 
  [
    'ABA',
    'CDC', 
    'EFE'
  ],
  {
    A: 'minecraft:stone_bricks',
    B: 'industrialforegoing:pitiful_generator',
    C: 'enderio:dark_steel_ingot',
    D: 'enderio:void_chassis',
    E: '#forge:gears/iron',
    F: 'minecraft:piston'
  }  
 )
 event.shaped(
  Item.of('refinedstorage:crafter'), 
  [
    'ABA',
    'CDC', 
    'AEA'
  ],
  {
    A: 'refinedstorage:quartz_enriched_iron',
    B: 'refinedstorage:construction_core',
    C: 'enderio:crafter',
    D: 'refinedstorage:machine_casing',
    E: 'refinedstorage:destruction_core'
  }  
 )
 event.shaped(
  Item.of('enderio:crafter'), 
  [
    'AAA',
    'BCB', 
    'DED'
  ],
  {
    A: '#forge:silicon',
    B: 'minecraft:iron_ingot',
    C: 'enderio:void_chassis',
    D: '#forge:gears/iron',
    E: 'thermal:machine_crafter'
  }  
 )
 event.shaped(
  Item.of('industrialforegoing:mob_duplicator'), 
  [
    'ABA',
    'CDC', 
    'EFE'
  ],
  {
    A: 'electrodynamics:sheetplastic',
    B: 'minecraft:nether_wart',
    C: 'minecraft:magma_cream',
    D: 'industrialforegoing:machine_frame_advanced',
    E: 'minecraft:emerald',
    F: 'enderio:powered_spawner'
  }  
 )
 event.shaped(
  Item.of('enderio:powered_spawner'), 
  [
    'ABA',
    'CDC', 
    'ABA'
  ],
  {
    A: 'enderio:dark_steel_bars',
    B: 'enderio:ensouled_chassis',
    C: 'enderio:octadic_capacitor',
    D: 'enderio:broken_spawner'
  }  
 )
 event.custom(
  {"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:coal_block"}},"mainInput":{"ingredient":{"item":"minecraft:turtle_egg"}},"output":{"item":"minecraft:wither_skeleton_spawn_egg"}}
 ) 
 event.shaped(
  Item.of('thermal:dynamo_stirling'), 
  [
    ' A ',
    'BCB', 
    'DED'
  ],
  {
    A: 'thermal:rf_coil',
    B: 'minecraft:iron_ingot',
    C: 'integrateddynamics:coal_generator',
    D: '#forge:stone',
    E: 'minecraft:redstone'
  }  
 )
 event.shaped(
  Item.of('thermal:dynamo_lapidary'), 
  [
    ' A ',
    'BCB', 
    'DED'
  ],
  {
    A: 'thermal:rf_coil',
    B: 'minecraft:iron_ingot',
    C: 'integrateddynamics:coal_generator',
    D: 'minecraft:lapis_lazuli',
    E: 'minecraft:redstone'
  }  
 )
 event.shaped(
  Item.of('thermal:dynamo_gourmand'), 
  [
    ' A ',
    'BCB', 
    'DED'
  ],
  {
    A: 'thermal:rf_coil',
    B: 'minecraft:iron_ingot',
    C: 'integrateddynamics:coal_generator',
    D: '#forge:ingots/tin',
    E: 'minecraft:redstone'
  }  
 )
 event.shaped(
  Item.of('industrialforegoing:meat_feeder'), 
  [
    ' A ',
    'ACD', 
    ' DB'
  ],
  {
    A: '#minecraft:arrows',
    B: 'electrodynamics:rodsteel',
    C: 'industrialforegoing:meat_bucket',
    D: 'electrodynamics:sheetplastic'
  }  
 )
 event.custom(
  {
    "type": "botania:mana_infusion",
    "catalyst": {
      "type": "block",
      "block": "botania:alchemy_catalyst"
    },
    "input": {
      "item": "minecraft:nether_star"
    },
    "mana": 10000,
    "output": {
      "item": "minecraft:ghast_tear"
    }
  }
 )
 event.custom(
  {"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:ghast_tear"}},"mainInput":{"ingredient":{"item":"minecraft:turtle_egg"}},"output":{"item":"minecraft:ghast_spawn_egg"}}
 ) 
 event.shapeless(
  Item.of('refinedstorage:silicon', 8),
  [
    '3x mysticalagriculture:silicon_essence'
  ]
 )
 event.custom(
  {
    "type": "powah:energizing",
    "ingredients": [
      {
        "item": "minecraft:amethyst_shard"
      },
      {
        "item": "minecraft:prismarine_shard"
      },
      {
        "item": "minecraft:echo_shard"
      }
    ],
    "energy": 50000,
    "result": {
    "item": "mysticalagriculture:prosperity_shard",
    "count": 1
    }
  }
 )
 event.custom(
  {
    "type": "draconicevolution:fusion_crafting",
    "catalyst": {
      "item": "draconicevolution:wyvern_crafting_injector"
    },
    "ingredients": [
      {
        "tag": "forge:gems/diamond"
      },
      {
        "tag": "forge:gems/diamond"
      },
      {
        "item": "draconicevolution:wyvern_core"
      },
      {
        "tag": "forge:storage_blocks/draconium_awakened"
      },
      {
        "item": "draconicevolution:wyvern_core"
      },
      {
        "tag": "forge:gems/diamond"
      },
      {
        "tag": "forge:gems/diamond"
      }
    ],
    "result": {
      "item": "draconicevolution:awakened_crafting_injector"
    },
    "tier": "WYVERN",
    "total_energy": 256000
  }
 )
 event.shaped(
  Item.of('draconicevolution:draconium_core'), 
  [
    'ABA',
    'BCB', 
    'ABA'
  ],
  {
    A: 'draconicevolution:draconium_ingot',
    B: 'minecraft:gold_ingot',
    C: 'botania:dragonstone'
  }  
 )
 event.shaped(
  Item.of('electrodynamics:solarpanel'), 
  [
    'ABA',
    'DCD', 
    'CEC'
  ],
  {
    A: 'electrodynamics:solarpanelplate',
    B: 'electrodynamics:platesteel',
    C: 'minecraft:iron_ingot',
    D: 'electrodynamics:wirecopper',
    E: 'electrodynamics:circuitbasic'
  }  
 )
 event.shaped(
  Item.of('3x voltaic:upgradebasicspeed'), 
  [
    'ABA',
    'BCB', 
    'DBD'
  ],
  {
    A: 'electrodynamics:platesteel',
    B: '#forge:wires/insulated_copper',
    C: 'electrodynamics:circuitbasic',
    D: 'minecraft:gold_ingot'
  }  
 )
 event.custom(
  {
    "type": "thermal:crucible",
    "ingredient": {
      "item": "integrateddynamics:crystalized_menril_block"
    },
    "result": [
      {
        "fluid": "integrateddynamics:menril_resin",
        "amount": 1000
      }
    ],
    "energy": 200000
  }
 )
  event.custom(
    {
      "type": "thermal:rock_gen",
      "adjacent": "minecraft:water",
      "below": "minecraft:diorite",
      "result": {
        "item": "minecraft:diorite"
      }
    }
  )
  event.shaped(
    Item.of('thermal:machine_centrifuge'), 
    [
      ' A ',
      'BCB', 
      'DED'
    ],
    {
      A: 'minecraft:compass',
      B: 'minecraft:magma_cream',
      C: 'thermal:machine_frame',
      D: 'thermal:constantan_gear',
      E: 'thermal:rf_coil'
    }  
   )
   event.shaped(
    Item.of('draconicevolution:crafting_core'), 
    [
      'ABA',
      'BCB', 
      'ABA'
    ],
    {
      A: 'minecraft:lapis_block',
      B: 'powah:niotic_crystal_block',
      C: 'draconicevolution:draconium_core'
    }  
   )
   event.shaped(
    Item.of('functionalstorage:configuration_tool'), 
    [
      'AAB',
      'ACB', 
      'ADA'
    ],
    {
      A: 'minecraft:paper',
      B: 'minecraft:gold_ingot',
      C: '#functionalstorage:drawer',
      D: 'minecraft:iron_ingot'
    }  
   )
   event.shaped(
    Item.of('electrodynamics:lathe'), 
    [
      'ABA',
      'BCB', 
      'ADA'
    ],
    {
      A: 'electrodynamics:platesteel',
      B: 'electrodynamics:motor',
      C: 'electrodynamics:circuitelite',
      D: 'electrodynamics:wiremill'
    }  
   )
   event.custom(
    {
      "type": "botania:mana_infusion",
      "input": {
        "item": "minecraft:charcoal"
      },
      "mana": 1000,
      "output": {
        "item": "minecraft:coal"
      }
    }
   )
   event.custom(
    {
      "type": "botania:mana_infusion",
      "input": {
        "item": "thermal:charcoal_block"
      },
      "mana": 9000,
      "output": {
        "item": "minecraft:coal_block"
      }
    }
   )
   event.custom(
    {
      "type": "botania:mana_infusion",
      "input": {
        "item": "minecraft:spider_eye"
      },
      "mana": 5000,
      "output": {
        "item": "minecraft:ender_pearl"
      }
    }
   )
   event.shapeless(
    Item.of('powah:dielectric_rod_horizontal'), 
    [
      'powah:dielectric_rod'
    ]
   )
   event.shapeless(
    Item.of('powah:dielectric_rod'), 
    [
      'powah:dielectric_rod_horizontal'
    ]
   )
   event.custom(
    {
      "type": "thermal:bottler",
      "ingredients": [
        {
          "tag": "minecraft:sand"
        },
        {
          "fluid": "minecraft:water",
          "amount": 1000
        }
      ],
      "result": [
        {
          "item": "minecraft:clay"
        }
      ],
      "experience": 0.1
    }
   )
   event.shaped(
    Item.of('minecraft:emerald_ore'), 
    [
      'AAA',
      'ABA', 
      'AAA'
    ],
    {
      A: 'minecraft:cobblestone',
      B: 'thermal:emerald_dust'
    }
   )
   event.shaped(
    Item.of('8x minecraft:calcite'), 
    [
      'AAA',
      'ABA', 
      'AAA'
    ],
    {
      A: 'minecraft:polished_diorite',
      B: 'minecraft:bone_block'
    }
   )
   event.custom(
    {
      "type": "botania:pure_daisy",
      "input": {
        "type": "block",
        "block": "minecraft:sand"
      },
      "output": {
        "name": "minecraft:soul_sand"
      }
    }
   )
   event.shaped(
    Item.of('ars_nouveau:volcanic_sourcelink'), 
    [
      'ACA',
      'DBD', 
      'ACA'
    ],
    {
      A: 'botania:endoflame',
      B: 'minecraft:lava_bucket',
      C: 'minecraft:diamond',
      D: 'minecraft:gold_ingot'
    }
   )
   event.custom(
    {"type":"mekanism:combining","extraInput":{"ingredient":{"item":"mekanism:reprocessed_fissile_fragment"}},"mainInput":{"ingredient":{"item":"minecraft:iron_ingot"}},"output":{"item":"extendedcrafting:black_iron_ingot"}}
   ) 
   event.shaped(
    Item.of('mekanism:superheating_element'), 
    [
      'ABA',
      'BCB', 
      'ABA'
    ],
    {
      A: 'minecraft:redstone',
      B: 'powah:crystal_blazing',
      C: 'mekanism:steel_casing'
    }
   )
   event.custom(
    {
      "type": "thermal:bottler",
      "ingredients": [
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "fluid": "thermal:glowstone",
          "amount": 1000
        }
      ],
      "result": [
        {
          "item": "extendedcrafting:luminessence"
        }
      ],
      "experience": 0.1
    }
   )
   event.custom(
    {"type":"mekanism:nucleosynthesizing","duration":500,"gasInput":{"amount":4000,"gas":"mekanism:antimatter"},"itemInput":{"ingredient":{"item":"mysticalagriculture:prosperity_seed_base"}},"output":{"item":"mysticalagriculture:antimatter_seeds"}}
   )
   event.shaped(
    Item.of('kubejs:bit_antimatter_pellet'), 
    [
      'AAA',
      'AAA', 
      'AAA'
    ],
    {
      A: 'mysticalagriculture:antimatter_essence'
    }
   )
   event.shaped(
    Item.of('mekanism:pellet_antimatter'), 
    [
      'AAA',
      'AAA', 
      'AAA'
    ],
    {
      A: 'kubejs:bit_antimatter_pellet'
    }
   )
   event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "abcdefghi",
        "jklmnopqr",
        "stuvwxyzA",
        "BCDEFGHIJ",
        "KLMNOPQRS",
        "TUVWXYZ12",
        "3456789éè",
        "çàù%£$=  ",
        "         "
      ],
      "key": {
        "a": {
          "item": "minecraft:iron_ingot"
        },
        "b": {
          "item": "minecraft:copper_ingot"
        },
        "c": {
          "item": "minecraft:gold_ingot"
        },
        "d": {
          "item": "minecraft:netherite_ingot"
        },
        "e": {
          "item": "botania:manasteel_ingot"
        },
        "f": {
          "item": "botania:terrasteel_ingot"
        },
        "g": {
          "item": "botania:elementium_ingot"
        },
        "h": {
          "item": "botania:gaia_ingot"
        },
        "i": {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        "j": {
          "item": "draconicevolution:draconium_ingot"
        },
        "k": {
          "item": "electrodynamics:ingotsuperconductive"
        },
        "l": {
          "item": "electrodynamics:ingotvanadium"
        },
        "m": {
          "item": "electrodynamics:ingotlithium"
        },
        "n": {
          "item": "electrodynamics:ingotaluminum"
        },
        "o": {
          "item": "electrodynamics:ingotchromium"
        },
        "p": {
          "item": "electrodynamics:ingotstainlesssteel"
        },
        "q": {
          "item": "electrodynamics:ingotvanadiumsteel"
        },
        "r": {
          "item": "electrodynamics:ingothslasteel"
        },
        "s": {
          "item": "electrodynamics:ingottitanium"
        },
        "t": {
          "item": "electrodynamics:ingotmolybdenum"
        },
        "u": {
          "item": "electrodynamics:ingottitaniumcarbide"
        },
        "v": {
          "item": "enderio:copper_alloy_ingot"
        },
        "w": {
          "item": "enderio:energetic_alloy_ingot"
        },
        "x": {
          "item": "enderio:vibrant_alloy_ingot"
        },
        "y": {
          "item": "enderio:redstone_alloy_ingot"
        },
        "z": {
          "item": "enderio:conductive_alloy_ingot"
        },
        "A": {
          "item": "enderio:pulsating_alloy_ingot"
        },
        "B": {
          "item": "enderio:dark_steel_ingot"
        },
        "C": {
          "item": "enderio:soularium_ingot"
        },
        "D": {
          "item": "enderio:end_steel_ingot"
        },
        "E": {
          "item": "industrialforegoing:pink_slime_ingot"
        },
        "F": {
          "item": "mekanism:ingot_steel"
        },
        "G": {
          "item": "mekanism:ingot_refined_obsidian"
        },
        "H": {
          "item": "mekanism:ingot_refined_glowstone"
        },
        "I": {
          "item": "mekanism:ingot_osmium"
        },
        "J": {
          "item": "mekanism:ingot_uranium"
        },
        "K": {
          "item": "mysticalagradditions:insanium_ingot"
        },
        "L": {
          "item": "mysticalagriculture:prosperity_ingot"
        },
        "M": {
          "item": "mysticalagriculture:inferium_ingot"
        },
        "N": {
          "item": "mysticalagriculture:prudentium_ingot"
        },
        "O": {
          "item": "mysticalagriculture:tertium_ingot"
        },
        "P": {
          "item": "mysticalagriculture:imperium_ingot"
        },
        "Q": {
          "item": "mysticalagriculture:supremium_ingot"
        },
        "R": {
          "item": "mysticalagriculture:awakened_supremium_ingot"
        },
        "S": {
          "item": "mysticalagriculture:soulium_ingot"
        },
        "T": {
          "item": "thermal:tin_ingot"
        },
        "U": {
          "item": "thermal:lead_ingot"
        },
        "V": {
          "item": "thermal:silver_ingot"
        },
        "W": {
          "item": "thermal:nickel_ingot"
        },
        "X": {
          "item": "thermal:bronze_ingot"
        },
        "Y": {
          "item": "thermal:electrum_ingot"
        },
        "Z": {
          "item": "thermal:invar_ingot"
        },
        "1": {
          "item": "thermal:constantan_ingot"
        },
        "2": {
          "item": "thermal:signalum_ingot"
        },
        "3": {
          "item": "thermal:lumium_ingot"
        },
        "4": {
          "item": "thermal:enderium_ingot"
        },
        "5": {
          "item": "mekanism_extras:ingot_naquadah"
        },
        "6": {
          "item": "thermal_extra:soul_infused_ingot"
        },
        "7": {
          "item": "thermal_extra:shellite_ingot"
        },
        "8": {
          "item": "thermal_extra:twinite_ingot"
        },
        "9": {
          "item": "thermal_extra:dragonsteel_ingot"
        },
        "é": {
          "item": "thermal_extra:abyssal_ingot"
        },
        "è": {
          "item": "avaritia:crystal_matrix_ingot"
        },
        "ç": {
          "item": "avaritia:neutronium_ingot"
        },
        "à": {
          "item": "extendedcrafting:black_iron_ingot"
        },
        "ù": {
          "item": "extendedcrafting:redstone_ingot"
        },
        "%": {
          "item": "extendedcrafting:enhanced_redstone_ingot"
        },
        "£": {
          "item": "extendedcrafting:ender_ingot"
        },
        "$": {
          "item": "extendedcrafting:enhanced_ender_ingot"
        },
        "=": {
          "item": "extendedcrafting:crystaltine_ingot"
        }
      },
      "result": {
        "item": "extendedcrafting:the_ultimate_ingot"
      }
    }
   )
   event.custom(
    {"type":"mekanism:nucleosynthesizing","duration":500,"gasInput":{"amount":10000,"gas":"mekanism:antimatter"},"itemInput":{"ingredient":{"item":"mysticalagradditions:insanium_essence"}},"output":{"item":"mysticalagradditions:creative_essence"}}
   )
   event.shaped(
    Item.of('functionalstorage:creative_vending_upgrade'), 
    [
      ' A ',
      'BCD', 
      ' E '
    ],
    {
      A: 'kubejs:matb3_key',
      B: 'kubejs:lody13_key',
      C: 'kubejs:morben',
      D: 'kubejs:nacl_key',
      E: 'kubejs:morsuk_key'
    }
   )
   event.custom(
    {"type":"mekanism:nucleosynthesizing","duration":500,"gasInput":{"amount":1000,"gas":"mekanism:antimatter"},"itemInput":{"ingredient":{"item":"extendedcrafting:the_ultimate_catalyst"}},"output":{"item":"avaritia:infinity_catalyst"}}
   )
   event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {
        "item": "powah:crystal_spirited"
      },
      {
        "item": "avaritia:diamond_lattice"
      },
      {
        "item": "minecraft:nether_star"
      }
      ],
      "energy": 1000000,
      "result": {
      "item": "avaritia:crystal_matrix_ingot",
      "count": 1
      }
    }
   )
   event.shaped(
    Item.of('draconicevolution:small_chaos_frag'), 
    [
      'AAA',
      'AAA', 
      'AAA'
    ],
    {
      A: 'mysticalagriculture:chaos_shard_essence'
    }
   )
   event.custom(
    {
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "ingredients": [
          {
            "item": "mysticalagradditions:creative_essence"
          },
          {
            "item": "mekanism_extras:infinite_fluid_tank"
          },
          {
            "item": "mysticalagradditions:creative_essence"
          },
          {
            "item": "mekanism_extras:infinite_fluid_tank"
          },
          {
            "item": "mysticalagradditions:creative_essence"
          },
          {
            "item": "mekanism_extras:infinite_fluid_tank"
          },
          {
            "item": "mysticalagradditions:creative_essence"
          },
          {
            "item": "mekanism_extras:infinite_fluid_tank"
          }
        ],
        "result": {
          "item": "mekanism:creative_fluid_tank"
        },
        "tier": "CHAOTIC",
        "total_energy": 10000000
      }
 )
   event.custom(
    {
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "ingredients": [
          {
            "item": "mysticalagradditions:creative_essence"
          },
          {
            "item": "mekanism_extras:infinite_chemical_tank"
          },
          {
            "item": "mysticalagradditions:creative_essence"
          },
          {
            "item": "mekanism_extras:infinite_chemical_tank"
          },
          {
            "item": "mysticalagradditions:creative_essence"
          },
          {
            "item": "mekanism_extras:infinite_chemical_tank"
          },
          {
            "item": "mysticalagradditions:creative_essence"
          },
          {
            "item": "mekanism_extras:infinite_chemical_tank"
          }
        ],
        "result": {
          "item": "mekanism:creative_chemical_tank"
        },
        "tier": "CHAOTIC",
        "total_energy": 10000000
      }
 )
 event.custom(
  {
      "type": "draconicevolution:fusion_crafting",
      "catalyst": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "ingredients": [
        {
          "item": "mysticalagradditions:creative_essence"
        },
        {
          "item": "mekanism_extras:infinite_energy_cube"
        },
        {
          "item": "mysticalagradditions:creative_essence"
        },
        {
          "item": "mekanism_extras:infinite_energy_cube"
        },
        {
          "item": "mysticalagradditions:creative_essence"
        },
        {
          "item": "mekanism_extras:infinite_energy_cube"
        },
        {
          "item": "mysticalagradditions:creative_essence"
        },
        {
          "item": "mekanism_extras:infinite_energy_cube"
        }
      ],
      "result": {
        "item": "mekanism:creative_energy_cube"
      },
      "tier": "CHAOTIC",
      "total_energy": 10000000
    }
 ) 
 event.shaped(
  Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}'), 
  [
    'ACA',
    'CBC', 
    'ACA'
  ],
  {
    A: 'mekanism_extras:infinite_induction_provider',
    B: 'mekanism:creative_energy_cube',
    C: 'mekanism_extras:infinite_induction_cell'
  }
 )
 event.custom({
  "type": "powah:energizing",
  "ingredients": [
    {
      "item": "mekanism:creative_chemical_tank"
    },
    {
      "item": "mekanism:creative_fluid_tank"
    },
    {
      "item": "mekanism:creative_energy_cube"
    }
  ],
  "energy": 1000000000000,
  "result": {
    "item": "kubejs:matb3_key",
    "count": 1
  }
 })
 event.custom(
  {
    "type": "botania:terra_plate",
    "ingredients": [
      {
        "item": "extendedcrafting:ultimate_singularity"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "mysticalagradditions:creative_essence"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      },
      {
        "item": "botania:fabulous_pool"
      }
      
    ],
    "mana": 16000000,
    "result": {
      "item": "botania:creative_pool"
    }
  }
 )
 event.custom(
  {
    "type": "botania:terra_plate",
    "ingredients": [
      {
        "item": "extendedcrafting:ultimate_singularity"
      },
      {
        "item": "botanicalmachinery:mana_battery"
      },
      {
        "item": "botanicalmachinery:mana_battery"
      },
      {
        "item": "mysticalagradditions:creative_essence"
      },
      {
        "item": "botanicalmachinery:mana_battery"
      },
      {
        "item": "botanicalmachinery:mana_battery"
      }
    ],
    "mana": 16000000,
    "result": {
      "item": "botanicalmachinery:mana_battery_creative"
    }
  }
 )
 event.custom(
  {
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "ars_nouveau:creative_source_jar"
    },
    "pedestalItems": [
      {
        "item": "ars_nouveau:source_jar"
      },
      {
        "item": "ars_nouveau:volcanic_sourcelink"
      },
      {
        "item": "ars_nouveau:agronomic_sourcelink"
      },
      {
        "item": "ars_nouveau:alchemical_sourcelink"
      },
      {
        "item": "ars_nouveau:vitalic_sourcelink"
      },
      {
        "item": "ars_nouveau:mycelial_sourcelink"
      },
      {
        "item": "mysticalagradditions:creative_essence"
      }
    ],
    "reagent": [
      {
        "item": "extendedcrafting:ultimate_singularity"
      }
    ],
    "sourceCost": 100000
  }
 )
 event.custom(
  {
    "type": "botania:terra_plate",
    "ingredients": [
      {
        "item": "ars_nouveau:creative_source_jar"
      },
      {
        "item": "botanicalmachinery:mana_battery_creative"
      },
      {
        "item": "botania:creative_pool"
      }
    ],
    "mana": 16000000,
    "result": {
      "item": "kubejs:nacl_key"
    }
  }
 )
 event.custom(
  {
    "type": "industrialforegoing:dissolution_chamber",
    "input": [
      {
        "item": "cabletiers:mega_exporter"
      },
      {
        "item": "refinedstorage:controller"
      },
      {
        "item": "cabletiers:mega_importer"
      },
      {
        "item": "cabletiers:mega_constructor"
      },
      {
        "item": "cabletiers:mega_destructor"
      },
      {
        "item": "cabletiers:mega_interface"
      },
      {
        "item": "extendedcrafting:ultimate_singularity"
      },
      {
        "item": "mysticalagradditions:creative_essence"
      }
    ],
    "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:ether_gas\"}",
    "output": {
      "count": 1,
      "item": "refinedstorage:creative_controller"
    },
    "processingTime": 400
  }
 )
 event.custom(
  {
    "type": "industrialforegoing:dissolution_chamber",
    "input": [
      {
        "tag": "refinedstorage:disks/items/16384k"
      },
      {
        "item": "industrialforegoing:supreme_black_hole_unit"
      },
      {
        "item": "mekanism_extras:infinite_bin"
      },
      {
        "item": "extendedcrafting:ultimate_singularity"
      },
      {
        "item": "mysticalagradditions:creative_essence"
      }
    ],
    "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:ether_gas\"}",
    "output": {
      "count": 1,
      "item": "refinedstorage:creative_storage_disk"
    },
    "processingTime": 400
  }
 )
 event.custom(
  {
    "type": "industrialforegoing:dissolution_chamber",
    "input": [
      {
        "tag": "refinedstorage:disks/fluids/1048576k"
      },
      {
        "item": "industrialforegoing:supreme_black_hole_tank"
      },
      {
        "item": "mekanism_extras:infinite_fluid_tank"
      }
      ,
      {
        "item": "extendedcrafting:ultimate_singularity"
      },
      {
        "item": "mysticalagradditions:creative_essence"
      }
    ],
    "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:ether_gas\"}",
    "output": {
      "count": 1,
      "item": "refinedstorage:creative_fluid_storage_disk"
    },
    "processingTime": 400
  }
 )
 event.custom(
  {
    "type": "industrialforegoing:dissolution_chamber",
    "input": [
      
      {
        "item": "refinedstorage:creative_fluid_storage_disk"
      },
      {
        "item": "refinedstorage:creative_controller"
      },
      {
        "item": "refinedstorage:creative_storage_disk"
      }
    ],
    "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:ether_gas\"}",
    "output": {
      "count": 1,
      "item": "kubejs:lody13_key"
    },
    "processingTime": 400
  }
 )
 event.custom(
  {
      "type": "draconicevolution:fusion_crafting",
      "catalyst": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "ingredients": [
        {
          "item": "mysticalagradditions:creative_essence"
        },
        {
          "item": "electrodynamics:thermoelectricgenerator"
        },
        {
          "item": "electrodynamics:coalgenerator"
        },
        {
          "item": "electrodynamics:hydroelectricgenerator"
        },
        {
          "item": "electrodynamics:combustionchamber"
        },
        {
          "item": "electrodynamics:windmill"
        },
        {
          "item": "electrodynamics:solarpanel"
        },
        {
          "item": "electrodynamics:advancedsolarpanel"
        }
      ],
      "result": {
        "item": "electrodynamics:creativepowersource"
      },
      "tier": "CHAOTIC",
      "total_energy": 10000000
    }
 ) 
 event.custom(
  {
      "type": "draconicevolution:fusion_crafting",
      "catalyst": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "ingredients": [
        {
          "item": "mysticalagradditions:creative_essence"
        },
        {
          "item": "thermal:machine_efficiency_augment"
        },
        {
          "item": "thermal_extra:soul_infused_machine_efficiency_augment"
        },
        {
          "item": "thermal_extra:twinite_machine_efficiency_augment"
        },
        {
          "item": "thermal_extra:shellite_machine_efficiency_augment"
        },
        {
          "item": "thermal_extra:dragonsteel_machine_efficiency_augment"
        },
        {
          "item": "thermal_extra:abyssal_machine_efficiency_augment"
        }
      ],
      "result": {
        "item": "thermal:machine_efficiency_creative_augment"
      },
      "tier": "CHAOTIC",
      "total_energy": 10000000
    }
 ) 
 event.custom(
  {
      "type": "draconicevolution:fusion_crafting",
      "catalyst": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "ingredients": [
        {
          "item": "mysticalagradditions:creative_essence"
        },
        {
          "item": "mysticalagradditions:creative_essence"
        },
        {
          "item": "enderio:vibrant_capacitor_bank"
        },
        {
          "item": "enderio:vibrant_capacitor_bank"
        },
        {
          "item": "powah:capacitor_nitro"
        },
        {
          "item": "powah:capacitor_nitro"
        },
        {
          "item": "draconicevolution:chaotic_capacitor"
        },
        {
          "item": "draconicevolution:chaotic_capacitor"
        }
      ],
      "result": {
        "item": "draconicevolution:creative_capacitor"
      },
      "tier": "CHAOTIC",
      "total_energy": 10000000
    }
 ) 
 event.custom({
  "type": "powah:energizing",
  "ingredients": [
    {
      "item": "draconicevolution:creative_capacitor"
    },
    {
      "item": "thermal:machine_efficiency_creative_augment"
    },
    {
      "item": "electrodynamics:creativepowersource"
    }
  ],
  "energy": 1000000000000,
  "result": {
    "item": "kubejs:morsuk_key",
    "count": 1
  }
 })
 event.shaped(
  Item.of('kubejs:morben'), 
  [
    'ABA',
    'DCE', 
    'AFA'
  ],
    {
      A: 'mysticalagradditions:creative_essence',
      B: 'extendedcrafting:nether_star_block',  
      C: 'extendedcrafting:ultimate_singularity',
      D: 'draconicadditions:chaos_heart',
      E: 'draconicevolution:dragon_heart',
      F: 'minecraft:heart_of_the_sea'
    }
 )
event.shaped(
  Item.of('minecraft:elytra'), 
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
    {
      A: 'minecraft:phantom_membrane',
      B: 'mekanism:jetpack_armored'
    }
 )
 event.custom(
  {
    "type": "botania:orechid",
    "input": {
    "type": "block",
    "block": "minecraft:netherrack"
  },
  "output": {
    "type": "block",
    "block": "minecraft:ancient_debris"
  },
  "weight": 148
  }
 )
 event.custom(
  {
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:netherrack"
    },
    "output": {
      "type": "block",
      "block": "minecraft:nether_gold_ore"
    },
    "weight": 3635
  }
 )
 event.custom(
  {
    "type": "botania:orechid",
    "input": {
      "type": "block",
      "block": "minecraft:netherrack"
    },
    "output": {
      "type": "block",
      "block": "minecraft:nether_quartz_ore"
    },
    "weight": 19600
  }
 )
 event.custom(
  {
    "type": "electrodynamics:mineral_grinder_recipe",
    "experience": 0.10000000149011612,
    "iteminputs": {
      "0": {
        "count": 1,
        "tag": "forge:impuredust/netherite"
      },
      "count": 1
    },
    "output": {
      "count": 1,
      "item": "minecraft:netherite_scrap"
    },
    "ticks": 200,
    "usagepertick": 350.0
  }
 )
 event.shaped(
  Item.of('refinedstorage:grid'), 
  [
    'ABC',
    'DEF', 
    'AGC'
  ],
    {
      A: 'refinedstorage:improved_processor',
      B: 'refinedstorage:construction_core',  
      C: '#c:glass_blocks',
      D: 'refinedstorage:quartz_enriched_iron',
      E: 'refinedstorage:machine_casing',
      F: 'integratedterminals:part_terminal_storage',
      G: 'refinedstorage:destruction_core'
    }
 )
 event.shaped(
  Item.of('enderio:basic_capacitor'), 
  [
    ' BA',
    'BCB', 
    'AB '
  ],
    {
      A: 'enderio:grains_of_infinity',
      B: 'powah:capacitor_hardened',  
      C: 'enderio:dark_steel_ingot'
    }
 )
 event.shaped(
  Item.of('enderio:double_layer_capacitor'), 
  [
    'ABA',
    'CDC', 
    'ABA'
  ],
    {
      A: 'powah:capacitor_niotic',
      B: 'enderio:energetic_alloy_ingot',  
      C: 'enderio:basic_capacitor',
      D: '#forge:dusts/coal'
    }
 )
 event.shaped(
  Item.of('enderio:octadic_capacitor'), 
  [
    'ABA',
    'CDC', 
    'ABA'
  ],
    {
      A: 'powah:capacitor_spirited',
      B: 'enderio:vibrant_alloy_ingot',  
      C: 'enderio:double_layer_capacitor',
      D: 'minecraft:glowstone'
    }
 )
 event.shaped(
  Item.of('thermal_extra:device_lava_gen'), 
  [
    'ABA',
    'CDC', 
    'AEA'
  ],
    {
      A: 'thermal_extra:soul_infused_rod',
      B: 'minecraft:iron_ingot',  
      C: 'minecraft:nether_wart_block',
      D: 'minecraft:bucket',
      E: 'thermal:redstone_servo'
    }
 )
 event.shaped(
  Item.of('minecraft:netherite_upgrade_smithing_template'), 
  [
    'ABA',
    'ACA', 
    'AAA'
  ],
    {
      A: 'minecraft:diamond',
      B: 'minecraft:netherite_block',  
      C: 'minecraft:netherrack'
    }
 )
 event.shaped(
  Item.of('botania:elven_spreader'), 
  [
    'AAA',
    'BCD', 
    'AAA'
  ],
    {
      A: '#botania:dreamwood_logs',
      B: 'botania:elementium_ingot',  
      C: '#botania:petals',
      D: 'botania:mana_spreader'
    }
 )
 event.custom(
  {
    "type": "thermal:pulverizer",
    "ingredient": {
      "tag": "forge:ores/draconium"
    },
    "result": [
      {
        "item": "draconicevolution:draconium_dust",
        "count": 2
      }
    ]
  }
 )
 event.custom(
  {"type":"mekanism:combining","extraInput":{"ingredient":{"item":"botania:shulk_me_not"}},"mainInput":{"ingredient":{"item":"draconicevolution:dragon_heart"}},"output":{"item":"minecraft:shulker_spawn_egg"}}
 ) 
 event.shaped(
  Item.of('mysticalagriculture:soulstone_cobble'), 
  [
    'ABA',
    'BCB', 
    'ABA'
  ],
    {
      A: 'minecraft:soul_sand',
      B: 'minecraft:cobblestone',  
      C: 'mysticalagradditions:insanium_essence'
    }
 )

 
 


 
































  })