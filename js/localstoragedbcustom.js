var dbName = "poslite"
var lsDB = new localStorageDB(dbName, localStorage)

if (lsDB.isNew()) {
	lsDB.createTable("products",["product_code","product_name","product_price"])
	lsDB.createTable("sales",["reference", "timestamp", "datetime", "data", "total", "payment", "change"])
	
	lsDB.createTable("config",["key", "value"])
	lsDB.insert("config", {key: "merchant_name", value: "POS LITE"})
	lsDB.insert("config", {key: "merchant_code", value: "PL"})
	lsDB.insert("config", {key: "merchant_logo", value: "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Shop-96.png"})
	lsDB.insert("config", {key: "merchant_address", value: "Jl Karangploso No 1 Kabupaten Malang Jawa Timur Indonesia 081234567890"})
	lsDB.insert("config", {key: "pic_name", value: "POS LITE"})
	lsDB.insert("config", {key: "pic_code", value: "PL"})
	lsDB.insert("config", {key: "receipt_footer", value: "Thank You"})

	lsDB.commit()
}

function newSesionDB() {
	lsDB = new localStorageDB(dbName, localStorage)
	return lsDB
}

function queryConfig(keyToSearch) {
	lsDB = newSesionDB()
	search = lsDB.queryAll("config", {
		query: {
			key: keyToSearch
		}
	})
	if (search.length == 0) {
		return ""
	}

	return search[0].value

}