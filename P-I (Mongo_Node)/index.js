const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1'; 
const client = new MongoClient(uri);

const main = async () => 
{
    try 
    {
        await client.connect();

        const db = client.db('shop'); 
        const collection = db.collection('products');

        const data = await collection.find({ price: { $gt: 1200 } }).toArray();
        console.log(data);

        return "done"; 
    } catch (error) {
        console.error('Error occurred:', error);
        throw error; 
    } finally {
        await client.close();
    }
};

main()
    .then(result => console.log(result)) 
    .catch(err => console.error('Error in main function:', err))
    .finally(() => client.close()); 