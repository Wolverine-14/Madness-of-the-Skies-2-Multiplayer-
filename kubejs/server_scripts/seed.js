ServerEvents.recipes(event =>{
    event.remove({ output: 'mysticalagriculture:infusion_crystal'})
    event.shaped(
        Item.of('mysticalagriculture:infusion_crystal'), 
        [
          'ABA',
          'BCB', 
          'ABA'
        ],
        {
          A: 'mysticalagriculture:inferium_essence',
          B: 'mysticalagriculture:prosperity_shard',
          C: 'powah:nitro_crystal_block'
        }  
       )
    event.remove({ output: 'mysticalagriculture:master_infusion_crystal'})
    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "catalyst": {
              "item": "mysticalagriculture:infusion_crystal"
            },
            "ingredients": [
              {
                "item": "mysticalagradditions:insanium_essence"
              },
              {
                "item": "powah:nitro_crystal_block"
              },
              {
                "item": "mysticalagradditions:insanium_essence"
              },
              {
                "item": "powah:nitro_crystal_block"
              },
              {
                "item": "mysticalagradditions:insanium_essence"
              },
              {
                "item": "powah:nitro_crystal_block"
              },
              {
                "item": "mysticalagradditions:insanium_essence"
              },
              {
                "item": "powah:nitro_crystal_block"
              }
            ],
            "result": {
              "item": "mysticalagriculture:master_infusion_crystal"
            },
            "tier": "DRACONIC",
            "total_energy": 8000000
          }
    )
    event.remove({ id: 'mysticalagriculture:essence/minecraft/coal'})
    event.shaped(
        Item.of('minecraft:coal_ore'), 
        [
          'AAA',
          'ABA', 
          'AAA'
        ],
        {
          A: 'mysticalagriculture:coal_essence',
          B: 'minecraft:stone'
        }  
       )
    event.remove({ id: 'mysticalagriculture:essence/common/sulfur'})
    event.shaped(
        Item.of('thermal:sulfur_ore'), 
        [
          'ABA',
          '   ', 
          '   '
        ],
        {
          A: 'mysticalagriculture:sulfur_essence',
          B: 'minecraft:stone'
        }  
       )
      event.remove({ id: 'mysticalagriculture:essence/common/aluminum_ingot'})
      event.shaped(
          Item.of('electrodynamics:orealuminum'), 
          [
            'AAA',
            'ABA', 
            'AAA'
          ],
          {
            A: 'mysticalagriculture:aluminum_essence',
            B: 'minecraft:stone'
          }  
        )
      event.remove({ id: 'mysticalagriculture:essence/common/niter'})
      event.shaped(
              Item.of('thermal:niter_ore'), 
              [
                '   ',
                'ABA', 
                '   '
              ],
              {
                A: 'mysticalagriculture:saltpeter_essence',
                B: 'minecraft:stone'
              }  
             )
      event.remove({ id: 'mysticalagriculture:essence/common/aluminum_ingot'})
      event.shaped(
                 Item.of('electrodynamics:orealuminum'), 
                 [
                   'AAA',
                   'ABA', 
                   'AAA'
                 ],
                 {
                   A: 'mysticalagriculture:aluminum_essence',
                   B: 'minecraft:stone'
                 }  
                )
                event.remove({ id: 'mysticalagriculture:essence/gems/apatite'})
                event.shaped(
                    Item.of('thermal:apatite_ore'), 
                    [
                      'AAA',
                      'ABA', 
                      'AAA'
                    ],
                    {
                      A: 'mysticalagriculture:apatite_essence',
                      B: 'minecraft:stone'
                    }  
                   )
                   event.remove({ id: 'mysticalagriculture:essence/minecraft/iron_ingot'})
                   event.shaped(
                       Item.of('minecraft:iron_ore'), 
                       [
                         'AAA',
                         'ABA', 
                         'AAA'
                       ],
                       {
                         A: 'mysticalagriculture:iron_essence',
                         B: 'minecraft:stone'
                       }  
                      )
                  event.remove({ id: 'mysticalagriculture:essence/minecraft/copper_ingot'})
                  event.shaped(
                       Item.of('minecraft:copper_ore'), 
                       [
                         'AAA',
                         'ABA', 
                         'AAA'
                       ],
                       {
                         A: 'mysticalagriculture:copper_essence',
                         B: 'minecraft:stone'
                       }  
                      )
                  event.remove({ id: 'mysticalagriculture:essence/minecraft/gold_ingot'})
                  event.shaped(
                       Item.of('minecraft:gold_ore'), 
                       [
                         'AAA',
                         'ABA', 
                         'AAA'
                       ],
                       {
                         A: 'mysticalagriculture:gold_essence',
                         B: 'minecraft:stone'
                       }  
                      )
                      event.remove({ id: 'mysticalagriculture:essence/common/tin_ingot'})
                      event.shaped(
                          Item.of('thermal:tin_ore'), 
                          [
                            'AAA',
                            'ABA', 
                            'AAA'
                          ],
                          {
                            A: 'mysticalagriculture:tin_essence',
                            B: 'minecraft:stone'
                          }  
                        )
                      event.remove({ id: 'mysticalagriculture:essence/common/lead_ingot'})
                      event.shaped(
                          Item.of('thermal:lead_ore'), 
                          [
                            'AAA',
                            'ABA', 
                            'AAA'
                          ],
                          {
                            A: 'mysticalagriculture:lead_essence',
                            B: 'minecraft:stone'
                          }  
                        )
                        event.remove({ id: 'mysticalagriculture:essence/common/silver_ingot'})
                        event.shaped(
                            Item.of('thermal:silver_ore'), 
                            [
                              'AAA',
                              'ABA', 
                              'AAA'
                            ],
                            {
                              A: 'mysticalagriculture:silver_essence',
                              B: 'minecraft:stone'
                            }  
                          )
                      event.remove({ id: 'mysticalagriculture:essence/common/nickel_ingot'})
                      event.shaped(
                          Item.of('thermal:nickel_ore'), 
                          [
                            'AAA',
                            'ABA', 
                            'AAA'
                          ],
                          {
                            A: 'mysticalagriculture:nickel_essence',
                            B: 'minecraft:stone'
                          }  
                        )
                      event.remove({ id: 'mysticalagriculture:essence/gems/ruby'})
                      event.shaped(
                          Item.of('thermal:ruby_ore'), 
                          [
                            'AAA',
                            'ABA', 
                            'AAA'
                          ],
                          {
                            A: 'mysticalagriculture:ruby_essence',
                            B: 'minecraft:stone'
                          }  
                        )
                      event.remove({ id: 'mysticalagriculture:essence/gems/sapphire'})
                      event.shaped(
                          Item.of('thermal:sapphire_ore'), 
                          [
                            'AAA',
                            'ABA', 
                            'AAA'
                          ],
                          {
                            A: 'mysticalagriculture:sapphire_essence',
                            B: 'minecraft:stone'
                          }  
                        )
                  event.remove({ id: 'mysticalagriculture:essence/minecraft/quartz'})
                  event.shaped(
                       Item.of('minecraft:nether_quartz_ore'), 
                       [
                         'AAA',
                         'ABA', 
                         'AAA'
                       ],
                       {
                         A: 'mysticalagriculture:nether_quartz_essence',
                         B: 'minecraft:stone'
                       }  
                      )
                  event.remove({ id: 'mysticalagriculture:essence/minecraft/redstone'})
                  event.shaped(
                       Item.of('minecraft:redstone_ore'), 
                       [
                         'AAA',
                         'ABA', 
                         'AAA'
                       ],
                       {
                         A: 'mysticalagriculture:redstone_essence',
                         B: 'minecraft:stone'
                       }  
                      )
                  event.remove({ id: 'mysticalagriculture:essence/minecraft/lapis_lazuli'})
                  event.shaped(
                       Item.of('minecraft:lapis_ore'), 
                       [
                         'AAA',
                         'ABA', 
                         'AAA'
                       ],
                       {
                         A: 'mysticalagriculture:lapis_lazuli_essence',
                         B: 'minecraft:stone'
                       }  
                      )
                  event.remove({ id: 'mysticalagriculture:essence/common/uranium_ingot'})
                  event.shaped(
                       Item.of('mekanism:uranium_ore'), 
                       [
                         'AAA',
                         'ABA', 
                         'AAA'
                       ],
                       {
                         A: 'mysticalagriculture:uranium_essence',
                         B: 'minecraft:stone'
                       }  
                      )
                  event.remove({ id: 'mysticalagriculture:essence/mekanism/osmium_ingot'})
                  event.shaped(
                       Item.of('mekanism:osmium_ore'), 
                       [
                         'AAA',
                         'ABA', 
                         'AAA'
                       ],
                       {
                         A: 'mysticalagriculture:osmium_essence',
                         B: 'minecraft:stone'
                       }  
                      )
                  event.remove({ id: 'mysticalagriculture:essence/mekanism/fluorite'})
                  event.shaped(
                       Item.of('mekanism:fluorite_ore'), 
                       [
                         'AAA',
                         'ABA', 
                         'AAA'
                       ],
                       {
                         A: 'mysticalagriculture:fluorite_essence',
                         B: 'minecraft:stone'
                       }  
                      )
      event.remove({ id: 'mysticalagriculture:essence/common/titanium_ingot'})
      event.shaped(
          Item.of('electrodynamics:oretitanium'), 
          [
            'AAA',
            'ABA', 
            'AAA'
          ],
          {
            A: 'mysticalagriculture:titanium_essence',
            B: 'minecraft:stone'
          }  
        )
      event.shaped(
          Item.of('electrodynamics:orechromium'), 
          [
            'AAA',
            'ABA', 
            'AAA'
          ],
          {
            A: 'mysticalagriculture:chrome_essence',
            B: 'minecraft:stone'
          }  
        )
        event.remove({ id: 'mysticalagriculture:essence/mysticalagriculture/soulium_dust'})
        event.shaped(
             Item.of('mysticalagriculture:soulium_ore'), 
             [
               'AAA',
               'ABA', 
               'AAA'
             ],
             {
               A: 'mysticalagriculture:soulium_essence',
               B: 'minecraft:stone'
             }  
            )
        event.remove({ id: 'mysticalagriculture:essence/draconicevolution/draconium_ingot'})
        event.shaped(
             Item.of('draconicevolution:overworld_draconium_ore'), 
             [
               'AAA',
               'ABA', 
               'AAA'
             ],
             {
               A: 'mysticalagriculture:draconium_essence',
               B: 'minecraft:stone'
             }  
            )










































})