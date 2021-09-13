const {MongoClient} = require('mongodb');
async function main(){

const uri= "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.y9ihr.mongodb.net/Cluster0?retryWrites=true&w=majority";

const client = new MongoClient(uri);

await client.connect();

await listDatabases(client);

try {
    await client.connect();

    await listDatabases(client);
}catch(e){
    console.error(e)
}

finally{
    await client.close();
}

}

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ")
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function insertRange() {
    await Excel.run(async (context) => {
    const sheet = context.workbook.worksheets.getItem("Sample");
    const range = sheet.getRange("B4:E4");
  
    range.insert(Excel.InsertShiftDirection.down);
  
    await context.sync();
    });
  }
  