const sql = require("./db.js");

const StoreItem = function(storeItem) {
  this.storeItemID = storeItem.storeItemID,
  this.storeID = storeItem.storeID,
  this.name = storeItem.name,
  this.description = storeItem.description,
  this.stockQty = storeItem.stockQty,
  this.price = storeItem.price,
  this.imageUrl = storeItem.imageUrl,
  this.imageName = storeItem.imageName
};

StoreItem.create = (storeItem, result) => {
  let fields = "storeItemID, storeID, name, description, stockQty, price, imageUrl";
  let values = "\"" + store.storeItemID + "\",\"" + store.storeID + "\",\"" + store.name
    + "\",\"" + store.description + "\",\"" + store.stockQty + "\",\"" + store.price +
    "\",\"" + store.imageUrl + "\"" ;

  sql.query("INSERT INTO STORE_ITEM(" + fields + ") VALUES(" + values + ")", (err,res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }
      console.log("created store item: ", { ...storeItem });
      result(null, { ...storeItem });
  });
}

StoreItem.updateQuantity = (storeItem, result) => {
  sql.query(
      "UPDATE STORE_ITEM SET stockQty=\"" + storeItem.stockQty + "\" WHERE storeItemID=\"" + storeItem.storeItemID + "\"",
      (err, res) => {
          if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
          } else if (res.affectedRows == 0) {
              result({ kind: "store item not found" }, null);
              return;
          }

          console.log("updated store item: ", { ...storeItem });
          result(null, { ...storeItem });
      }
  );
}

StoreItem.updateImage = (storeItem, result) => {
 var query = "UPDATE STORE_ITEM SET ? WHERE storeItemID = ?";
 var updates = { imageUrl: storeItem.imageUrl, imageName: storeItem.imageName };
 sql.query(
      query, [updates, storeItem.storeItemID],
      (err, res) => {
          if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
          } else if (res.affectedRows == 0) {
              result({ kind: "store item not found" }, null);
              return;
          }

          console.log("updated store item: ", { ...storeItem });
          result(null, { ...storeItem });
      }
  );
}

module.exports = StoreItem;
