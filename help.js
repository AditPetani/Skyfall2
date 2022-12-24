
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
━━━❲ 𝙂𝙐𝙍𝘽𝙊𝙏-𝙈𝘿 ━━━

 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
 • ID : @${sender.split('@')[0]}
 • Nama : ${namenya}
 • Premium : ${premnya}

 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
 • Library : Baileys-MD
 • Time : ${jam} WIB
 • Date : ${tanggal}
 • Terdaftar : ${usernya}
 • Room Chat : ${romnya}
 • Total Fitur : 600+

 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}menu
 ꗇ ${prefix}iklan
 ꗇ ${prefix}rules
 ꗇ ${prefix}owner
 ꗇ ${prefix}script
 ꗇ ${prefix}infobot
 ꗇ ${prefix}donasi
 ꗇ ${prefix}donate
 ꗇ ${prefix}jadibot
 ꗇ ${prefix}listjadibot
 ꗇ ${prefix}sewabot
 ꗇ ${prefix}groupbot
 ꗇ ${prefix}ownerinfo
 ꗇ ${prefix}infoowner

 𝙐𝙎𝙀𝙍 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}verify
 ꗇ ${prefix}report
 ꗇ ${prefix}request
 ꗇ ${prefix}menfess
 ꗇ ${prefix}buatroom
 ꗇ ${prefix}secretchat
 ꗇ ${prefix}cekprem
 ꗇ ${prefix}daftarprem
 ꗇ ${prefix}changename

 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}error
 ꗇ ${prefix}clearerr
 ꗇ ${prefix}siaran
 ꗇ ${prefix}session
 ꗇ ${prefix}resetdb
 ꗇ ${prefix}runtime
 ꗇ ${prefix}setexif
 ꗇ ${prefix}setwm
 ꗇ ${prefix}setfooter
 ꗇ ${prefix}setppbot
 ꗇ ${prefix}addprem
 ꗇ ${prefix}delprem
 ꗇ ${prefix}bc
 ꗇ ${prefix}bctext
 ꗇ ${prefix}bcvideo
 ꗇ ${prefix}bcaudio
 ꗇ ${prefix}bcimage
 ꗇ ${prefix}broadcast

 𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}kali 1 2
 ꗇ ${prefix}bagi 1 2
 ꗇ ${prefix}kurang 1 2
 ꗇ ${prefix}tambah 1 2
 ꗇ ${prefix}dellist key
 ꗇ ${prefix}addlist key@response
 ꗇ ${prefix}update key@response
 ꗇ ${prefix}done <reply orderan>
 ꗇ ${prefix}proses <reply orderan>
 ꗇ ${prefix}list <only group>
 ꗇ ${prefix}shop <only group>
 
 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}fitnah
 ꗇ ${prefix}delete
 ꗇ ${prefix}revoke
 ꗇ ${prefix}tagall
 ꗇ ${prefix}hidetag
 ꗇ ${prefix}setdesc
 ꗇ ${prefix}linkgrup
 ꗇ ${prefix}infogroup
 ꗇ ${prefix}setppgrup
 ꗇ ${prefix}setnamegrup
 ꗇ ${prefix}group open
 ꗇ ${prefix}group close
 ꗇ ${prefix}antilink on
 ꗇ ${prefix}antilink off
 ꗇ ${prefix}welcome on
 ꗇ ${prefix}welcome off
 ꗇ ${prefix}tiktokauto on
 ꗇ ${prefix}tiktokauto off
 ꗇ ${prefix}kick @tag
 ꗇ ${prefix}demote @tag
 ꗇ ${prefix}promote @tag
 
 𝘼𝙐𝙏𝙊𝘿𝙀𝘾𝙏 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}sadcat
 ꗇ ${prefix}translate
 ꗇ ${prefix}stalkff
 ꗇ ${prefix}stalknpm
 ꗇ ${prefix}stalkgithub
 ꗇ ${prefix}balikhuruf
 ꗇ ${prefix}balikangka
 ꗇ ${prefix}besarkecil
 ꗇ ${prefix}bilangangka

 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐
 ꗇ ${prefix}tiktok
 ꗇ ${prefix}ytmp3
 ꗇ ${prefix}ytmp4
 ꗇ ${prefix}pinterest
 ꗇ ${prefix}playmp3
 ꗇ ${prefix}playmp4
 ꗇ ${prefix}gitclone
 ꗇ ${prefix}mediafire
 ꗇ ${prefix}wikimedia
 ꗇ ${prefix}soundcloud
 ꗇ ${prefix}infogempa

 𝘽𝙐𝙂𝙑𝙄𝙋 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}sendbug 628xxx
 ꗇ ${prefix}philips 628xxx
 ꗇ ${prefix}philips2 628xxx
 ꗇ ${prefix}philips3 628xxx
 ꗇ ${prefix}santet @tag
 ꗇ ${prefix}santet2 @tag
 ꗇ ${prefix}santet3 @tag
 ꗇ ${prefix}virtex 628xxx
 ꗇ ${prefix}virtex2 628xxx
 ꗇ ${prefix}virtex3 628xxx
 ꗇ ${prefix}bug1 628xxx
 ꗇ ${prefix}bug2 628xxx
 ꗇ ${prefix}bug3 628xxx
 ꗇ ${prefix}bug4 628xxx
 ꗇ ${prefix}bug5 628xxx
 
 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}tts
 ꗇ ${prefix}ttp
 ꗇ ${prefix}ttp2
 ꗇ ${prefix}attp
 ꗇ ${prefix}attp2
 ꗇ ${prefix}tourl
 ꗇ ${prefix}upload
 ꗇ ${prefix}toimg
 ꗇ ${prefix}toimage
 ꗇ ${prefix}tomp3
 ꗇ ${prefix}toaudio
 ꗇ ${prefix}tomp4
 ꗇ ${prefix}tovideo
 ꗇ ${prefix}emojimix
 ꗇ ${prefix}emojmix
 ꗇ ${prefix}emojinua
 ꗇ ${prefix}mixemoji
 ꗇ ${prefix}stiker
 ꗇ ${prefix}sticker
 ꗇ ${prefix}sgif
 ꗇ ${prefix}stikergif
 ꗇ ${prefix}stickergif
 ꗇ ${prefix}swm
 ꗇ ${prefix}stikerwm
 ꗇ ${prefix}stickerwm
 ꗇ ${prefix}smeme
 ꗇ ${prefix}memestiker
 ꗇ ${prefix}stikermeme
 ꗇ ${prefix}stickermeme
 ꗇ ${prefix}takesticker
 ꗇ ${prefix}emojinua2
 ꗇ ${prefix}mixemoji2
 ꗇ ${prefix}emojmix2
 ꗇ ${prefix}emojimix2

 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}spamcall
 ꗇ ${prefix}translate
 ꗇ ${prefix}ssweb-pc
 ꗇ ${prefix}ssweb-hp
 ꗇ ${prefix}bitly_short
 ꗇ ${prefix}cuttly_short
 ꗇ ${prefix}tinyurl_short
 ꗇ ${prefix}base32
 ꗇ ${prefix}base64
 ꗇ ${prefix}debase32
 ꗇ ${prefix}debase64
 
 𝙍𝘼𝙉𝘿𝙊𝙈 𝘾𝙀𝙆 
 ꗇ ${prefix}cekjelek
 ꗇ ${prefix}cekcantik
 ꗇ ${prefix}cekganteng
 ꗇ ${prefix}ceksad
 ꗇ ${prefix}cekharam
 ꗇ ${prefix}cekhalal
 ꗇ ${prefix}cekbego
 ꗇ ${prefix}cekanjing
 ꗇ ${prefix}cekbiadab
 ꗇ ${prefix}cekramah
 ꗇ ${prefix}ceksatir
 ꗇ ${prefix}cekmanis
 ꗇ ${prefix}cekpahit
 ꗇ ${prefix}cekhitam
 ꗇ ${prefix}cekrasis
 ꗇ ${prefix}cekbaik
 ꗇ ${prefix}cekjahat
 ꗇ ${prefix}cekkaya
 ꗇ ${prefix}cekmiskin
 ꗇ ${prefix}cekpintar
 ꗇ ${prefix}cekbodoh
 ꗇ ${prefix}cekimut
 ꗇ ${prefix}cekkocak
 ꗇ ${prefix}cekkadang

 𝙎𝙀𝙍𝙏𝙄𝙁𝙄𝙆𝘼𝙏 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}toloserti <nama>
 ꗇ ${prefix}badgirlserti <nama>
 ꗇ ${prefix}goodgirlserti <nama>
 ꗇ ${prefix}fuckgirlserti <nama>
 ꗇ ${prefix}bucinserti <nama>
 
 𝙇𝙊𝙂𝙊 𝙈𝘼𝙆𝙀𝙍 
 ꗇ ${prefix}joker
 ꗇ ${prefix}digital
 ꗇ ${prefix}nulis
 ꗇ ${prefix}nulis2
 ꗇ ${prefix}quoteser
 ꗇ ${prefix}quobucin
 ꗇ ${prefix}rem
 ꗇ ${prefix}girlneko
 ꗇ ${prefix}sadboy
 ꗇ ${prefix}kaneki
 ꗇ ${prefix}lolimaker

 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}buatroom 628xxx
 ꗇ ${prefix}room <only owner>
 ꗇ ${prefix}stopchat <only room>
 ꗇ ${prefix}menfess 628xx|bot|hai

 𝙎𝙊𝙎𝙈𝙀𝘿 𝙎𝙃𝙊𝙋 
 ꗇ ${prefix}pricelist <layanan>
 ꗇ ${prefix}order <cara order>
 ꗇ ${prefix}like jumlah|target
 ꗇ ${prefix}view jumlah|target
 ꗇ ${prefix}follower jumlah|username
 ꗇ ${prefix}cekstatus <idtrx>
 ꗇ ${prefix}komisi <owner only>
 ꗇ ${prefix}tarikkomisi <owner only>
 
 𝙑𝙊𝙆𝘼𝙇 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}hilih <text>
 ꗇ ${prefix}halah <text>
 ꗇ ${prefix}huluh <text>
 ꗇ ${prefix}heleh <text>
 ꗇ ${prefix}holoh <text>
 
 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}cecan
 ꗇ ${prefix}cogan
 ꗇ ${prefix}mobil
 ꗇ ${prefix}islamic
 ꗇ ${prefix}darkjokes
 ꗇ ${prefix}boneka
 ꗇ ${prefix}wallhp
 ꗇ ${prefix}tatasurya
 ꗇ ${prefix}programing

 𝙋𝙍𝙄𝙈𝘽𝙊𝙉 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}ramaljodoh
 ꗇ ${prefix}ramalanjodoh
 ꗇ ${prefix}nomorhoki
 ꗇ ${prefix}artimimpi
 ꗇ ${prefix}artinama
 ꗇ ${prefix}sifatusaha
 ꗇ ${prefix}tafsirmimpi
 ꗇ ${prefix}pasangan
 ꗇ ${prefix}suamiistri
 ꗇ ${prefix}ramalcinta
 ꗇ ${prefix}ramalancinta
 ꗇ ${prefix}ramaljodohbali
 ꗇ ${prefix}ramalanjodohbali
 ꗇ ${prefix}cocoknama
 ꗇ ${prefix}kecocokannama
 ꗇ ${prefix}cocokpasangan
 ꗇ ${prefix}kecocokanpasangan

 𝘼𝙎𝙐𝙋𝘼𝙉 𝙂𝘼𝘾𝙃𝘼 
 ꗇ ${prefix}rika
 ꗇ ${prefix}bocil
 ꗇ ${prefix}ukhty
 ꗇ ${prefix}santuy
 ꗇ ${prefix}hijaber

 𝘼𝙐𝘿𝙄𝙊 𝘾𝙃𝘼𝙉𝙂𝙀𝙍 
 ꗇ ${prefix}fat
 ꗇ ${prefix}fast
 ꗇ ${prefix}slow
 ꗇ ${prefix}bass
 ꗇ ${prefix}deep
 ꗇ ${prefix}tupai
 ꗇ ${prefix}robot
 ꗇ ${prefix}blown
 ꗇ ${prefix}smooth
 ꗇ ${prefix}earrape
 ꗇ ${prefix}reverse
 ꗇ ${prefix}nightcore

 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}gempa
 ꗇ ${prefix}jadwaltv
 ꗇ ${prefix}gempanow
 ꗇ ${prefix}bioskopnow
 ꗇ ${prefix}latintoaksara
 ꗇ ${prefix}aksaratolatin

 𝙍𝘼𝙉𝘿𝙊𝙈 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 
 ꗇ ${prefix}dadu
 ꗇ ${prefix}anjing
 ꗇ ${prefix}patrick
 ꗇ ${prefix}bucinstick
 ꗇ ${prefix}gawrgura
 ꗇ ${prefix}amongus

 𝘼𝙐𝘿𝙄𝙊 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 ꗇ ${prefix}audio${ad++}
 
 𝙁𝙐𝙉 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}goblokcek 
 ꗇ ${prefix}jelekcek 
 ꗇ ${prefix}gaycek
 ꗇ ${prefix}lesbicek
 ꗇ ${prefix}gantengcek 
 ꗇ ${prefix}cantikcek
 ꗇ ${prefix}begocek 
 ꗇ ${prefix}suhucek
 ꗇ ${prefix}pintercek
 ꗇ ${prefix}jagocek
 ꗇ ${prefix}nolepcek
 ꗇ ${prefix}babicek
 ꗇ ${prefix}bebancek
 ꗇ ${prefix}baikcek
 ꗇ ${prefix}jahatcek
 ꗇ ${prefix}anjingcek
 ꗇ ${prefix}haramcek
 ꗇ ${prefix}pakboycek
 ꗇ ${prefix}pakgirlcek
 ꗇ ${prefix}sangecek 
 ꗇ ${prefix}bapercek
 ꗇ ${prefix}fakboycek
 ꗇ ${prefix}alimcek
 ꗇ ${prefix}suhucek
 ꗇ ${prefix}fakgirlcek
 ꗇ ${prefix}kerencek
 ꗇ ${prefix}wibucek

 𝙒𝘼𝙇𝙇𝙋𝘼𝙋𝙀𝙍 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}milf
 ꗇ ${prefix}loli
 ꗇ ${prefix}wallml
 ꗇ ${prefix}waifu
 ꗇ ${prefix}husbu
 ꗇ ${prefix}cosplay
 ꗇ ${prefix}ppcouple
 ꗇ ${prefix}wallpaperislami
 ꗇ ${prefix}wallpaperinori
 ꗇ ${prefix}wallpaperanime
 ꗇ ${prefix}wallpapergamer
 ꗇ ${prefix}wallpapermeme
 ꗇ ${prefix}wallpaperprogamer
 ꗇ ${prefix}wallpaperteknologi
 ꗇ ${prefix}wallpapercyber

 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}cry
 ꗇ ${prefix}hug
 ꗇ ${prefix}pat
 ꗇ ${prefix}bully
 ꗇ ${prefix}lick
 ꗇ ${prefix}kiss
 ꗇ ${prefix}awoo
 ꗇ ${prefix}waifu
 ꗇ ${prefix}shinobu
 ꗇ ${prefix}cuddle
 ꗇ ${prefix}megumin
 ꗇ ${prefix}slap
 ꗇ ${prefix}neko
 ꗇ ${prefix}wink
 ꗇ ${prefix}dance
 ꗇ ${prefix}poke
 ꗇ ${prefix}glomp
 ꗇ ${prefix}bite
 ꗇ ${prefix}nom
 ꗇ ${prefix}handhold
 ꗇ ${prefix}highfive
 ꗇ ${prefix}wave
 ꗇ ${prefix}smug
 ꗇ ${prefix}smile
 ꗇ ${prefix}bonk

 𝘾𝙀𝙍𝙋𝙀𝙉 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}cerpen-sejarah
 ꗇ ${prefix}cerpen-sedih
 ꗇ ${prefix}cerpen-sastra
 ꗇ ${prefix}cerpen-romantis
 ꗇ ${prefix}cerpen-rohani
 ꗇ ${prefix}cerpen-rindu
 ꗇ ${prefix}cerpen-remaja
 ꗇ ${prefix}cerpen-ramadhan
 ꗇ ${prefix}cerpen-petualangan
 ꗇ ${prefix}cerpen-persahabatan
 ꗇ ${prefix}cerpen-perpisahan
 ꗇ ${prefix}cerpen-perjuangan
 ꗇ ${prefix}cerpen-penyesalan
 ꗇ ${prefix}cerpen-pengorbanan
 ꗇ ${prefix}cerpen-pengalaman
 ꗇ ${prefix}cerpen-pendidikan
 ꗇ ${prefix}cerpen-penantian
 ꗇ ${prefix}cerpen-patahhati
 ꗇ ${prefix}cerpen-olahraga
 ꗇ ${prefix}cerpen-nasionalisme
 ꗇ ${prefix}cerpen-nasihat
 ꗇ ${prefix}cerpen-motivasi
 ꗇ ${prefix}cerpen-misteri
 ꗇ ${prefix}cerpen-mengharukan
 ꗇ ${prefix}cerpen-malaysia
 ꗇ ${prefix}cerpen-liburan
 ꗇ ${prefix}cerpen-kristen
 ꗇ ${prefix}cerpen-korea
 ꗇ ${prefix}cerpen-kisahnyata
 ꗇ ${prefix}cerpen-keluarga
 ꗇ ${prefix}cerpen-kehidupan
 ꗇ ${prefix}cerpen-jepang
 ꗇ ${prefix}cerpen-inspiratif
 ꗇ ${prefix}cerpen-gokil
 ꗇ ${prefix}cerpen-galau
 ꗇ ${prefix}cerpen-cintasejati
 ꗇ ${prefix}cerpen-cintasegitiga
 ꗇ ${prefix}cerpen-cintasedih
 ꗇ ${prefix}cerpen-cintaromantis
 ꗇ ${prefix}cerpen-cintapertama
 ꗇ ${prefix}cerpen-cintaislami
 ꗇ ${prefix}cerpen-cinta
 ꗇ ${prefix}cerpen-budaya
 ꗇ ${prefix}cerpen-bahasasunda
 ꗇ ${prefix}cerpen-bahasajawa
 ꗇ ${prefix}cerpen-bahasainggris
 ꗇ ${prefix}cerpen-bahasadaerah
 ꗇ ${prefix}cerpen-anak

 𝙉𝙎𝙁𝙒 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}yuri
 ꗇ ${prefix}ero
 ꗇ ${prefix}foot
 ꗇ ${prefix}ass
 ꗇ ${prefix}cuckold
 ꗇ ${prefix}cum
 ꗇ ${prefix}hentai
 ꗇ ${prefix}gangbang
 ꗇ ${prefix}femdom
 ꗇ ${prefix}ahegao
 ꗇ ${prefix}glasses
 ꗇ ${prefix}jahy
 ꗇ ${prefix}orgy
 ꗇ ${prefix}pussy
 ꗇ ${prefix}thighs
 ꗇ ${prefix}panties
 ꗇ ${prefix}thighs
 ꗇ ${prefix}masturbation
 ꗇ ${prefix}chiisaihentai
 ꗇ ${prefix}trap
 ꗇ ${prefix}blowjob
 ꗇ ${prefix}yaoi
 ꗇ ${prefix}ecchi
 ꗇ ${prefix}hentai
 ꗇ ${prefix}ahegao
 ꗇ ${prefix}hololewd
 ꗇ ${prefix}sideoppai
 ꗇ ${prefix}animefeets
 ꗇ ${prefix}animebooty
 ꗇ ${prefix}animethighss
 ꗇ ${prefix}hentaiparadise
 ꗇ ${prefix}animearmpits
 ꗇ ${prefix}hentaifemdom
 ꗇ ${prefix}lewdanimegirls
 ꗇ ${prefix}biganimetiddies
 ꗇ ${prefix}animebellybutton
 ꗇ ${prefix}hentai4everyone

 𝙎𝙊𝙐𝙉𝘿 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}sound1
 ꗇ ${prefix}sound2
 ꗇ ${prefix}sound3
 ꗇ ${prefix}sound4
 ꗇ ${prefix}sound5
 ꗇ ${prefix}sound6
 ꗇ ${prefix}sound7
 ꗇ ${prefix}sound8
 ꗇ ${prefix}sound9
 ꗇ ${prefix}sound10
 ꗇ ${prefix}sound11
 ꗇ ${prefix}sound12
 ꗇ ${prefix}sound13
 ꗇ ${prefix}sound14
 ꗇ ${prefix}sound15
 ꗇ ${prefix}sound16
 ꗇ ${prefix}sound17
 ꗇ ${prefix}sound18
 ꗇ ${prefix}sound19
 ꗇ ${prefix}sound20
 ꗇ ${prefix}sound21
 ꗇ ${prefix}sound22
 ꗇ ${prefix}sound23
 ꗇ ${prefix}sound24
 ꗇ ${prefix}sound25
 ꗇ ${prefix}sound26
 ꗇ ${prefix}sound27
 ꗇ ${prefix}sound28
 ꗇ ${prefix}sound29
 ꗇ ${prefix}sound30
 ꗇ ${prefix}sound31
 ꗇ ${prefix}sound32
 ꗇ ${prefix}sound33
 ꗇ ${prefix}sound34
 ꗇ ${prefix}sound35
 ꗇ ${prefix}sound36
 ꗇ ${prefix}sound37
 ꗇ ${prefix}sound38
 ꗇ ${prefix}sound39
 ꗇ ${prefix}sound40
 ꗇ ${prefix}sound41
 ꗇ ${prefix}sound42
 ꗇ ${prefix}sound43
 ꗇ ${prefix}sound44
 ꗇ ${prefix}sound45
 ꗇ ${prefix}sound46
 ꗇ ${prefix}sound47
 ꗇ ${prefix}sound48
 ꗇ ${prefix}sound49
 ꗇ ${prefix}sound50
 ꗇ ${prefix}sound51
 ꗇ ${prefix}sound52
 ꗇ ${prefix}sound53
 ꗇ ${prefix}sound54
 ꗇ ${prefix}sound55
 ꗇ ${prefix}sound56
 ꗇ ${prefix}sound57
 ꗇ ${prefix}sound58
 ꗇ ${prefix}sound59
 ꗇ ${prefix}sound60
 ꗇ ${prefix}sound61
 ꗇ ${prefix}sound62
 ꗇ ${prefix}sound63
 ꗇ ${prefix}sound64
 ꗇ ${prefix}sound65
 ꗇ ${prefix}sound66
 ꗇ ${prefix}sound67
 ꗇ ${prefix}sound68
 ꗇ ${prefix}sound69
 ꗇ ${prefix}sound70
 ꗇ ${prefix}sound71
 ꗇ ${prefix}sound72
 ꗇ ${prefix}sound73
 ꗇ ${prefix}sound74

 𝙏𝙀𝙓𝙏𝙋𝙍𝙊 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}metallic text
 ꗇ ${prefix}naruto text
 ꗇ ${prefix}butterfly text
 ꗇ ${prefix}flaming text
 ꗇ ${prefix}shadow text
 ꗇ ${prefix}cup text
 ꗇ ${prefix}cup1 text
 ꗇ ${prefix}romance text
 ꗇ ${prefix}smoke text
 ꗇ ${prefix}burnpaper text
 ꗇ ${prefix}lovemessage text
 ꗇ ${prefix}undergrass text
 ꗇ ${prefix}love text
 ꗇ ${prefix}coffe text
 ꗇ ${prefix}woodheart text
 ꗇ ${prefix}woodenboard text
 ꗇ ${prefix}summer3d text
 ꗇ ${prefix}wolfmetal text
 ꗇ ${prefix}nature3d text
 ꗇ ${prefix}underwater text
 ꗇ ${prefix}goldenrose text
 ꗇ ${prefix}summernature text
 ꗇ ${prefix}letterleaves text
 ꗇ ${prefix}glowingneon text
 ꗇ ${prefix}fallleaves text
 ꗇ ${prefix}flamming text
 ꗇ ${prefix}harrypotter text
 ꗇ ${prefix}carvedwood text
 ꗇ ${prefix}tiktok text1 text2
 ꗇ ${prefix}arcade8bit text1 text2
 ꗇ ${prefix}battlefield4 text1 text2
 ꗇ ${prefix}pubg text1 text2

 𝙀𝙋𝙃𝙊𝙏𝙊 𝙈𝙀𝙉𝙐 
 ꗇ ${prefix}wetglass text
 ꗇ ${prefix}multicolor3d text
 ꗇ ${prefix}watercolor text
 ꗇ ${prefix}luxurygold text
 ꗇ ${prefix}galaxywallpaper text
 ꗇ ${prefix}lighttext text
 ꗇ ${prefix}beautifulflower text
 ꗇ ${prefix}puppycute text
 ꗇ ${prefix}royaltext text
 ꗇ ${prefix}heartshaped text
 ꗇ ${prefix}birthdaycake text
 ꗇ ${prefix}galaxystyle text
 ꗇ ${prefix}hologram3d text
 ꗇ ${prefix}greenneon text
 ꗇ ${prefix}glossychrome text
 ꗇ ${prefix}greenbush text
 ꗇ ${prefix}metallogo text
 ꗇ ${prefix}noeltext text
 ꗇ ${prefix}glittergold text
 ꗇ ${prefix}textcake text
 ꗇ ${prefix}starsnight text
 ꗇ ${prefix}wooden3d text
 ꗇ ${prefix}textbyname text
 ꗇ ${prefix}writegalacy text
 ꗇ ${prefix}galaxybat text
 ꗇ ${prefix}snow3d text
 ꗇ ${prefix}birthdayday text
 ꗇ ${prefix}goldplaybutton text
 ꗇ ${prefix}silverplaybutton text
 ꗇ ${prefix}freefire text

 𝙍𝘼𝙉𝘿𝙊𝙈 𝙄𝙈𝘼𝙂𝙀 
 ꗇ ${prefix}bj
 ꗇ ${prefix}ero
 ꗇ ${prefix}ppcp
 ꗇ ${prefix}cum
 ꗇ ${prefix}feet
 ꗇ ${prefix}yuri
 ꗇ ${prefix}trap
 ꗇ ${prefix}lewd
 ꗇ ${prefix}feed
 ꗇ ${prefix}eron
 ꗇ ${prefix}solo
 ꗇ ${prefix}gasm
 ꗇ ${prefix}poke
 ꗇ ${prefix}anal
 ꗇ ${prefix}holo
 ꗇ ${prefix}tits
 ꗇ ${prefix}kuni
 ꗇ ${prefix}kiss
 ꗇ ${prefix}erok
 ꗇ ${prefix}smug
 ꗇ ${prefix}baka
 ꗇ ${prefix}solog
 ꗇ ${prefix}feetg
 ꗇ ${prefix}lewdk
 ꗇ ${prefix}waifu
 ꗇ ${prefix}pussy
 ꗇ ${prefix}femdom
 ꗇ ${prefix}cuddle
 ꗇ ${prefix}hentai
 ꗇ ${prefix}eroyuri
 ꗇ ${prefix}cum_jpg
 ꗇ ${prefix}blowjob
 ꗇ ${prefix}erofeet
 ꗇ ${prefix}holoero
 ꗇ ${prefix}classic
 ꗇ ${prefix}erokemo
 ꗇ ${prefix}fox_girl
 ꗇ ${prefix}futanari
 ꗇ ${prefix}lewdkemo
 ꗇ ${prefix}wallpaper
 ꗇ ${prefix}pussy_jpg
 ꗇ ${prefix}kemonomimi
 ꗇ ${prefix}nsfw_avatar
 `
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment Ovo*
Number: 083129240927
A/N: Adit

*Payment Dana*
Number: 083129240927
A/N: Adit

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Adit
 • *Umur:* 18 tahun
 • *Hoby:* Turu/Game
 • *Askot:* Palembang
 • *Konten:* Creator

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* 083129240927
 • *Youtube:* Gada
 • *Github:* AditPetani
 `
}