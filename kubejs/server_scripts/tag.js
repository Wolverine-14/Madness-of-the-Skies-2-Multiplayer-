ServerEvents.tags('item', event => {
  event.add('forge:circuits/mekanism_basic','mekanism:basic_control_circuit')
  event.add('forge:circuits/electrodynamics_basic','electrodynamics:circuitbasic')
  event.remove('forge:circuits/basic', 'electrodynamics:circuitbasic')

  event.add('forge:circuits/mekanism_advanced','mekanism:advanced_control_circuit')
  event.add('forge:circuits/electrodynamics_advanced','electrodynamics:circuitadvanced')
  event.remove('forge:circuits/advanced', 'electrodynamics:circuitadvanced')

  event.add('forge:circuits/mekanism_elite','mekanism:elite_control_circuit')
  event.add('forge:circuits/electrodynamics_elite','electrodynamics:circuitelite')
  event.remove('forge:circuits/elite', 'electrodynamics:circuitelite')

  event.add('forge:circuits/mekanism_ultimate','mekanism:ultimate_control_circuit')
  event.add('forge:circuits/electrodynamics_ultimate','electrodynamics:circuitultimate')
  event.remove('forge:circuits/ultimate', 'electrodynamics:circuitultimate')
  event.remove('forge:plastic', 'industrialforegoing:plastic')
  event.remove('forge:silicon', 'enderio:silicon')

})


  