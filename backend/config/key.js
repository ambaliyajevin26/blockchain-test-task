// For security purpose we need to move this all config keys to .env and from there we can access
module.exports = {
    MongoURI: "mongodb://admin:admin987@cluster0-shard-00-00.r3fs6.mongodb.net:27017,cluster0-shard-00-01.r3fs6.mongodb.net:27017,cluster0-shard-00-02.r3fs6.mongodb.net:27017/auth?authSource=admin&replicaSet=atlas-638q0p-shard-0&readPreference=primary&ssl=true", // "mongodb://admin:admin987@cluster0-shard-00-00.r3fs6.mongodb.net:27017,cluster0-shard-00-01.r3fs6.mongodb.net:27017,cluster0-shard-00-02.r3fs6.mongodb.net:27017/auth?authSource=admin&replicaSet=atlas-638q0p-shard-0&readPreference=primary&ssl=true",
    JWT_KEY: "secret",
    CURRENCY_EXCHANGE_API_KEY: "fca_live_UhSMjw4W5ENFBXqYq5sr78DufIm44sqkh8NLZWhf"
}