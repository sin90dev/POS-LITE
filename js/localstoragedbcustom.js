var dbName = "poslite"
var lsDB = new localStorageDB(dbName, localStorage)

if (lsDB.isNew()) {
	lsDB.createTable("products",["product_code","product_name","product_price"])
	lsDB.createTable("sales",["order_id","products","total_price"])
	lsDB.commit()
}

function newSesionDB() {
	lsDB = new localStorageDB(dbName, localStorage)
	return lsDB
}