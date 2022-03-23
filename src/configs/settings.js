/**
 * Client Settings
 * @param { Client } client 
 */

 module.exports = (client) => {

    //General Settings
    client.settings = {

        Prefix: ".",//prefix
        Token: "",//botunun tokeni
        Owners: [],//bot sahibi id
        OtherBots: [],//yeni rol oluşturun sunucunuzdaki tüm botlara o rolü verin ondan sonra rolün id yi "" kısmına ekleyin
        VoiceChannel: "",//ses kanal id
        Activity: "LISTENING",// Listening yerine WATCHING - PLAYING gibi şeyler yazabilirsiniz
        Status: "dnd",//online idle dnd offline arasından istediğinizi yapabilirsiniz
        MongoURL: "",//mongodb url'niz
        Footer: "Anarchy",//bot footeriniz
        DisableCooldownsForAdmins: true,//elleme knka

    };

    //Activity Messages
    client.statusMessages = [

        "Only Anarchy!",//1. durum
        "Created By Anarchy!",//2. durum
        "Anarchy"//3. durum

    ];
//Emojiler kısmını elleme kanka
    //Emojis
    client.systemEmojis = [

        ///System
        { emojiName: 'developer', emojiUrl: 'https://cdn.discordapp.com/emojis/853642013332865035.gif?v=1' },
        { emojiName: 'loading', emojiUrl: 'https://cdn.discordapp.com/emojis/857935194203226118.gif?v=1' },
        { emojiName: 'arrow', emojiUrl: 'https://cdn.discordapp.com/emojis/821298641863442442.gif?v=1' },
        { emojiName: 'crown', emojiUrl: 'https://cdn.discordapp.com/emojis/876942324909871114.gif?v=1' },
        { emojiName: 'crown2', emojiUrl: 'https://cdn.discordapp.com/emojis/876929331572662323.gif?v=1' },
        { emojiName: 'mark', emojiUrl: 'https://cdn.discordapp.com/emojis/876153262796079115.gif?v=1' },
        { emojiName: 'mark2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641429146140684.png?v=1' },
        { emojiName: 'cross', emojiUrl: 'https://cdn.discordapp.com/emojis/876153078863253514.gif?v=1' },
        { emojiName: 'cross2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641452227264522.png?v=1' },
        { emojiName: 'success', emojiUrl: 'https://cdn.discordapp.com/emojis/793774156067373066.gif?v=1' },

        ///Status
        { emojiName: 'online', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950275698692.png?v=1' },
        { emojiName: 'dnd', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950355390545.png?v=1' },
        { emojiName: 'idle', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950069915667.png?v=1' },
        { emojiName: 'offline', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950686609420.png?v=1' },
        { emojiName: 'web', emojiUrl: 'https://cdn.discordapp.com/emojis/825429354707288065.png?v=1' },

        ///Penal
        { emojiName: 'banned', emojiUrl: 'https://cdn.discordapp.com/emojis/748618263071555645.gif?v=1' },
        { emojiName: 'jailed', emojiUrl: 'https://cdn.discordapp.com/emojis/878303820181024788.png?v=1' },
        { emojiName: 'chatMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/878303318743609384.png?v=1' },
        { emojiName: 'warned', emojiUrl: 'https://cdn.discordapp.com/emojis/826369282942042112.png?v=1' },

        ///Voice
        { emojiName: 'joined', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545977794560.gif?v=1' },   
        { emojiName: 'leaved', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545168293968.gif?v=1' },
        { emojiName: 'unMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450633564271.png?v=1' },
        { emojiName: 'muted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710451086524416.png?v=1' },
        { emojiName: 'unDeafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450243502091.png?v=1' },
        { emojiName: 'deafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450138619915.png?v=1' },
        { emojiName: 'camera', emojiUrl: 'https://cdn.discordapp.com/emojis/839043294717542400.png?v=1' }

    ];

    //Guild Settings     
    client.guildSettings = {

        ///General
        guildID: "",//sunucu id
        guildTags: [],//tagınız
        guildDiscriminator: "",//etiket tag
        guildTeams: [],//tag alanlara verilecek rol id
        meetRole: "",//toplantıya katılanlara verilecek rol id
        meetChannel: "",//toplantı kanal id (ses kanal)
        nameTag: "",//isim tag
        dmMessages: true,//elleme işte olum
        unAuthorizedMessages: true,//no kanka elleme

        ///Staffs
        staffRoles: [],//ilk yetki id
        transporterSpears: [],//transporter id
        registerSpears: [],//kayıt sorumlusu id
        staffGiver: "",//yetki verici rol id
        botYt: "",//botlara özel rol açın admin salın ve o rolün id yi ekleyin buraya (ROLÜ DE TÜM BOTLARA VERİN AMQ)

        ///Penals
        penals: {

            ///Ban
            ban: {
                staffs: [],//ban yetkilisi id
                penalPoint: 40,
                penalLimit: 5,
                log: "",//ban log id (alttaki gif linklerini de elleme iyi olanları ekledik oraya amk)
                banGifs: ['https://media1.tenor.com/images/ed33599ac8db8867ee23bae29b20b0ec/tenor.gif?itemid=14760307', 'https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif', 'https://media1.tenor.com/images/4732faf454006e370fa9ec6e53dbf040/tenor.gif?itemid=14678194'],
                unbanGifs: ['https://data.whicdn.com/images/192611812/original.gif'],
            },

            ///Jail
            jail: {
                staffs: [],//jail yetkilisi rol id
                jailRoles: [],//jaillenen kişilere verilecek rol id
                jailChannel: "",//jail chat kanal id
                penalPoint: 30,
                penalLimit: 5,
                log: "",//jail log id
            },

            ///Chat Mute
            chatMute: {
                staffs: [],//chat mute yetkilisi id
                cmuteRoles: [],//chat muted rol id
                penalPoint: 20,
                penalLimit: 5,
                log: "",//chat mute log id
            },

            ///Voice Mute
            voiceMute: {
                staffs: [],//ses mute yt rol id
                vmuteRoles: [],//ses mute alanlara verilecek rol
                penalPoint: 20,
                penalLimit: 5,
                log: "",//voice mute log id
            },

            ///Warn
            warn: {
                staffs: [],//warn yetkilisi id
                warnRoles: [{
                    warnCount: 1,
                    warnRole: "",//1. uyarı rol id
                }, {
                    warnCount: 2,
                    warnRole: "",//2. uyarı rol id
                }, {
                    warnCount: 3,
                    warnRole: "",//3. uyarı rol id
                }],
                penalPoint: 10,
                log: "",//uyarı log
            },

        },

        ///Registration
        registration: {
            unregisterName: "",//sunucuya biri gelince yapılacak oto isim (örnek: İsim | Yaş ver amk)
            unregisterRoles: [],//kayıtsız rol id
            unregisterChannel: "",//register chat id
            quarantineRole: "",//Karantina rol id
            familyRole: "",//tag alarak verilecek rol id
        },

        ///Forbidden Tag
        forbiddenTag: {
            forbidRoles: [],//yasaklı tag rol id
            forbidChannel: "",//yasaklı tag chat id
            forbidLog: "",//yasaklı tag log id
        },

        ///Logs
        logs: {
            pointLog: "",//point log id
            voiceLog: "",//ses log id
            messageLog: "",//mesaj log id
            securityLog: "",//security log id
        },

    };

};
