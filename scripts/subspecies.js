Hooks.on("setup", () => {
    let config = {
        subspecies: {
            human: {}
        }
    }

    config.subspecies["human"]["wasteland"] = {
        name: "Wasteland",
        skills: [
            "Bribery",
            "Charm",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Arabyan)",
            "Language (Bretonyan)",
            "Language (Cathanyan)",
            "Language (Nipponese)",
            "Language (Estalin)",
            "Language (Tilean)",
            "Lore (Wasteland)",
            "Sail",
            "Trade (Any)",
        ],
        talents: [
            "Briber",
            "Dealmaker",
            "Savvy, Suave",
            2
        ]
    }

    mergeObject(game.wfrp4e.config, config)
})