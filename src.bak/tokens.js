function getPRNG(seed) {
    let seedValue = []
    for (let i in seed) {
        seedValue.push(seed.charCodeAt(i));
    }
    seedValue = seedValue.reduce((acc, x) => acc + x, 0);
    let randomValue = ((seedValue * 13) + 65) % 46 % 97;
    return parseInt(randomValue);
}

function encrypt(salt, message) {
    let index = parseInt(message.length / 2);
    let msg = message.slice(0, index) + salt + message.slice(index);
    let shift = getPRNG(salt);
    let numMessage = [];

    for (let i in msg) {
        numMessage.push(msg.charCodeAt(i) + shift);
    }

    let encryptedMessage = numMessage.map(c => String.fromCharCode(c)).join("");
    return encryptedMessage;
}

function decrypt(salt, message) {
    let encSalt = []
    let shift = getPRNG(salt);

    for (let i in salt) {
        encSalt.push(salt.charCodeAt(i) + shift);
    }

    encSalt = encSalt.map(c => String.fromCharCode(c)).join("");
    let encMessage = message.replace(encSalt, "");
    let numMessage = [];

    for (let i in encMessage) {
        numMessage.push(encMessage.charCodeAt(i) - shift);
    }

    let decryptedMessage = numMessage.map(c => String.fromCharCode(c)).join("");
    return decryptedMessage;
}

const salt = "aaaa";
const names = [
    "Admin",
    "Wahyu_Supriatna",
    "Tiara_Septia_Mubarokah",
    "Tiara_More_&_Hendra",
    "Faisal_Muhammad_Rosid_S._Sos.",
    "Agung_Wibawa_S._Sos.",
    "Anggi_Lukman_Priadi_S._Sos.",
    "Ari_Firmansyah_S._Sos.",
    "Jaka_Permana_S._Sos.",
    "Rifal_Hasan_Sofiyan_S._Sos.",
    "Sony_Setia_S._Sos.",
    "Giranti_Maharani_S._Sos.",
    "Mulyani_Febriani_S._Sos.",
    "Indi_Silvikasari_S._Sos.",
    "Delima_Rohmayanti_S._Sos.",
    "Retno_Ajyuliastuti_S._Sos.",
    "Nenden_Fera_Nur_Fazri_S._Sos.",
    "Pipit_Pitriyah_S._Sos.",
    "Aep_\"Awonk\"_Saepudin_S._Sos.",
    "Sella_Sukmawati_S._Sos.",
    "Aniesa_Nuramanah_S._Sos.",
    "Novi_Sri_Handayani_S._Sos.",
    "Hani_Siti_Nurhaeni",
    "Ratma_Komalasari_S._Sos.",
    "Khoerunnisa_\"Ajeng\"_Nuraeni_S._Sos.",
    "Inayatu_Sholihah_S._Sos.",
    "Junizar_Muhammad_Fahmi_S._Sos.",
    "Sidiq_Rivansyah_S._Sos.",
    "Resty_Fauziyyah_S._Sos._M._Si.",
    "Irfan_Prima_W_S._Sos.",
    "Pak_Agus_Setiawan_S._Sos.",
    "Pak_H._Agus_Salam_S._Sos.",
    "Pak_Ide_Lesmana_S._Sos.",
    "Pak_Tedi_Firmansyah_A_S._Sos.",
    "Pak_Yepi_Kamal_Pahmi_S._Sos.",
    "Bu_Ernayati_S._Sos.",
    "Rita_Ropiqoh_S._Sos.",
    "Pak_Dwi_Osparjo_S._Sos.",
    "Puji_Astuti_S._Sos.",
    "Pak_Teja_Sukmana_S._Sos.",
    "Annisa_Nopiani_S._Sos.",
    "Aldiansyah_Dwi_Saputra_S._Sos.",
    "Om_Cahyo_Krisdianto_S._Sos.",
    "Syifa_Nurazizah_S._Sos.",
    "Mochammad_Riansyah_Nugraha_S._Sos.",
    "Pak_Sugiharto_S._Sos.",
    "Galuh_Pandu_Arandhityo_S._Sos.",
    "Heri_Saeful_Bahri_S._Sos.",
    "Pak_Tedi_Firmansyah_B",
    "Agiesna",
    "Agung",
    "Alif",
    "Alvionita",
    "Amel",
    "Asti",
    "Ayang_Yuni",
    "Azki",
    "Zuyina",
    "Siska",
    "Laela",
    "Shalsabila",
    "Bina",
    "Wini",
    "Irma",
    "Cindy_Adela",
    "Dea_Novia",
    "Devya",
    "Dhima",
    "Hilda",
    "Dahil",
    "Intan_Ayu",
    "Intan_Ps",
    "Revalia",
    "Kinanti",
    "Maysarah",
    "Resti",
    "Melani",
    "Nadia",
    "Natasya",
    "Nenden",
    "Sabila",
    "Nurlaela",
    "Tharisa",
    "Ranti",
    "Rosa_S",
    "Sabil",
    "Santi",
    "Sindi_Ayu",
    "Sasya",
    "Sinta",
    "Teh_Ai",
    "Teh_Erna",
    "Teh_Herlina",
    "Teh_Lika",
    "Teh_Kania",
    "Teh_Rani",
    "Teh_Meira",
    "Teh_Meli",
    "Teh_Fitria",
    "Teh_Dilla",
    "Teh_Pina",
    "Teh_Resti",
    "Teh_Siti_&_Umay",
    "Teh_Yulia",
    "Trista",
    "Vavoy",
    "Wanda",
    "Yeni",
    "Alumni_Gusar",
    "Alumni_9B",
    "Maul",
    "Sofi",
    "Okta",
    "Robi",
    "Desi",
    "Desy",
    "Teh_Rina",
    "Rizky_Dwi",
    "Mutia",
    "Emip",
    "Baim_Berod",
    "Kamal",
    "Yubi",
    "Acep",
    "Peus",
    "Amid",
    "Wendi",
    "Desi",
    "Epi",
    "Yuni",
    "Pipit",
    "Astri",
    "Ana",
    "Deni",
    "Asep",
    "Alo",
    "Dede_Sulaeman",
    "Eman",
    "Yadi",
    "Nani",
    "Niki",
    "Elis",
    "Adam",
    "Iis",
    "Entin",
    "Ida",
    "A_Iwan",
    "Bagor",
    "Uwoh",
    "Ikeu",
    "Sri_Wahyuni",
    "Bagja",
    "Pak_Yadi",
    "Sandi",
    "Tian",
    "Gilang",
    "Pak_Redi",
    "Tian",
    "Muhajir Team",
    "Abdul_Gafur_Lc._Ma.",
];

for (const name of names) {
    console.log(`${name} : https://wedding-invitation-yuyu-yaya.vercel.app/?guest=${encrypt(salt, name)}`);
}

