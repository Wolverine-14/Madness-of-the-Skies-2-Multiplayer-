ServerEvents.recipes(event => {
  //Energy
    event.remove({ output: 'enderio:energy_conduit'})
    event.shaped(
        Item.of('8x enderio:energy_conduit'), 
        [
          'AAA',
          'CBD', 
          'AAA'
        ],
        {
          A: 'enderio:conduit_binder',
          B: 'enderio:conductive_alloy_ingot',
          C: 'integrateddynamics:cable',
          D: 'integratedtunnels:part_interface_energy'
        }  
       )
  event.remove({ output: 'powah:energy_cable_starter'})
  event.shaped(
        Item.of('12x powah:energy_cable_starter'), 
        [
          'AAA',
          'BCB', 
          'AAA'
        ],
        {
          A: 'powah:dielectric_rod_horizontal',
          B: 'enderio:energy_conduit',
          C: 'powah:capacitor_basic_tiny'
        }  
       )
  event.remove({ id: 'powah:crafting/cable_basic_2'})  
  event.remove({ output: 'mekanism:basic_universal_cable'})
  event.shaped(
        Item.of('8x mekanism:basic_universal_cable'), 
        [
          ' C ',
          'ABA', 
          ' C '
        ],
        {
          A: '#forge:ingots/steel',
          B: 'minecraft:redstone',
          C: 'powah:energy_cable_basic'
        }  
       )
  event.remove({ output: 'powah:energy_cable_hardened'})
  event.shaped(
        Item.of('6x powah:energy_cable_hardened'), 
        [
          'AAA',
          'BCB', 
          'AAA'
        ],
        {
          A: 'powah:dielectric_rod_horizontal',
          B: 'mekanism:basic_universal_cable',
          C: 'powah:capacitor_hardened'
        }  
       )
  event.remove({ id: 'powah:crafting/cable_blazing_2'})
  event.remove({ id: 'powah:crafting/cable_niotic_2'})
  event.remove({ output: 'mekanism:advanced_universal_cable'})
  event.shaped(
        Item.of('8x mekanism:advanced_universal_cable'), 
        [
          'AAA',
          'BCB', 
          'AAA'
        ],
        {
          A: 'mekanism:basic_universal_cable',
          B: 'powah:energy_cable_niotic',
          C: 'mekanism:alloy_infused'
        }  
       )
  event.remove({ output: 'powah:energy_cable_spirited'})
  event.shaped(
        Item.of('6x powah:energy_cable_spirited'), 
        [
          'AAA',
          'BCB', 
          'AAA'
        ],
        {
          A: 'powah:dielectric_rod_horizontal',
          B: 'mekanism:advanced_universal_cable',
          C: 'powah:capacitor_spirited'
        }  
       )
  event.remove({ output: 'mekanism:elite_universal_cable'})
  event.shaped(
        Item.of('8x mekanism:elite_universal_cable'), 
        [
          'AAA',
          'BCB', 
          'AAA'
        ],
        {
          A: 'mekanism:advanced_universal_cable',
          B: 'powah:energy_cable_spirited',
          C: 'mekanism:alloy_reinforced'
        }  
       )
  event.remove({ output: 'powah:energy_cable_nitro'})
  event.shaped(
           Item.of('6x powah:energy_cable_nitro'), 
           [
             'AAA',
             'BCB', 
             'AAA'
           ],
           {
             A: 'powah:dielectric_rod_horizontal',
             B: 'mekanism:elite_universal_cable',
             C: 'powah:capacitor_nitro'
           }  
          )
  event.remove({ output: 'mekanism:ultimate_universal_cable'})
  event.shaped(
        Item.of('8x mekanism:ultimate_universal_cable'), 
         [
         'AAA',
         'BCB', 
         'AAA'
         ],
         {
         A: 'mekanism:elite_universal_cable',
         B: 'powah:energy_cable_nitro',
         C: 'mekanism:alloy_atomic'
         }  
        )
  //Fluid
  event.remove({ output: 'enderio:fluid_conduit'})
  event.shaped(
           Item.of('8x enderio:fluid_conduit'), 
           [
             'AAA',
             'BCD', 
             'AAA'
           ],
           {
             A: 'enderio:conduit_binder',
             B: 'electrodynamics:pipesteel',
             C: 'integrateddynamics:cable',
             D: 'integratedtunnels:part_interface_fluid'
           }  
          )
  event.remove({ id: 'enderio:pressurized_fluid_conduit'})
  event.remove({ id: 'enderio:ender_fluid_conduit'})
  event.remove({ output: 'mekanism:basic_mechanical_pipe'})
  event.shaped(
           Item.of('8x mekanism:basic_mechanical_pipe'), 
           [
             ' A ',
             'BCB', 
             ' A '
           ],
           {
             A: 'enderio:ender_fluid_conduit',
             B: '#forge:ingots/steel',
             C: 'minecraft:bucket'
           }  
          )
  //Item
  event.remove({ output: 'enderio:item_conduit'})
  event.shaped(
    Item.of('8x enderio:item_conduit'), 
    [
      'AAA',
      'BCD', 
      'AAA'
    ],
    {
      A: 'enderio:conduit_binder',
      B: 'mekanism:basic_logistical_transporter',
      C: 'enderio:pulsating_alloy_ingot',
      D: 'integratedtunnels:part_interface_item'
    }  
   )
  event.remove({ output: 'mekanism:basic_logistical_transporter'})
  event.shaped(
    Item.of('8x mekanism:basic_logistical_transporter'), 
    [
      ' A ',
      'BCB', 
      ' A '
    ],
    {
      A: 'mekanism:basic_control_circuit',
      B: '#forge:ingots/steel',
      C: 'integrateddynamics:cable'
    }  
   )
  //Gas
  event.remove({ output: 'mekanism:basic_pressurized_tube'})
  event.shaped(
    Item.of('8x mekanism:basic_pressurized_tube'), 
    [
      ' A ',
      'BCB', 
      ' A '
    ],
    {
      A: 'mekanism:basic_control_circuit',
      B: 'electrodynamics:gaspipeuninsulatedsteel',
      C: 'integrateddynamics:cable'
    }  
   )


    






    








})