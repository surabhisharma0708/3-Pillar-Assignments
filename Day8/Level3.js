//1
let personAccount = {
    firstName: "Surabhi",
    lastName : "Sharma",
    income : {
        totalIncome:100,
        addIncome:50,
        accountBalace:"150"
    },
    expenses : {
        
        totalExpenses:200,
        accountInfo:"SBI",
        
        addExpense:"50",
        
    }
}
//2
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//2a
function signUp(ob)
{
    for(let i of users)
    {
        if(i._id!==ob._id)
        {
            users.push(ob);
        
        }
        else
        {
            console.log("user already exists");
            break;
        }
    }
}
let obj ={_id: 'ghderc',
username: 'Thomas',
email: 'thomas@thomas.com',
password: '123333',
createdAt:'08/01/2020 10:00 AM',
isLoggedIn: false}

signUp(obj);

//2b

function signIn()
{

}

//3
// a)
function rateProduct(objj)
{
    for(let i =0;i<products.length;i++)
    {
        if(products[i].name==objj)
        {
            let rate_obj={userID: "dsdjkaj",
                rate: 6
            }
            products[i].ratings.push(rate_obj);
        }
    }
}

let pro ="mobile phone";

rateProduct(pro);
console.log(products);

//b)
let co =0,s=0,avg =0;;
function avgRating(ob)
{
    for(let i =0;i<products.length;i++)
    {
        if(products[i].name==ob)
        {
            let ratee =products[i].ratings;
            let len = products[i].ratings.length;
            for(let x =0;x<len;x++)
            {
                s=s+ratee[x].rate;
                co++;
            }
        }


    }
    avg = s/co;
    return avg;
}

avgRating('mobile phone');

//4
function likeProduct()
{

}