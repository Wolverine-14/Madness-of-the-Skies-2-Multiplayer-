LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:warden")
        .addLoot("minecraft:echo_shard")
    event
        .addEntityLootModifier("minecraft:ender_dragon")
        .addLoot("minecraft:dragon_head")
});