import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';


const Tab = createMaterialBottomTabNavigator();

function Discover(navigation) {
  return (
    <ScrollView vertical>
      <View style={style.container}>
        <View style={style.header}>
          <Image source={require('./assets/menu.png')}
            style={{ width: 40, height: 40 }}
          />
          <View style={style.img}>
            <Image source={require('./assets/1696271403753.jpg')}
              style={{
                width: 40, height: 40, borderRadius: 50,
              }}
            />
            <StatusBar style="auto" />
          </View>
        </View>


        <View style={style.headerText}>
          <Text style={style.Text}>Discover Seasonal
            Fruits and vegitables</Text>
        </View>


       
          <View style={style.headerbtn}>
            <TouchableOpacity style={{
              backgroundColor: 'rgb(255, 0, 85)',
              borderRadius: 50,
              padding: 5,
              width: 100
            }}>
              <Text style={style.buttonText}>Orange</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor: '#f5f5f500',
              borderRadius: 50,
              padding: 5,
              width: 100
            }}>
              <Text style={{ fontWeight: 'bold', display: 'flex', textAlign: 'center' }}>Grape</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor: '#f5f5f500',
              borderRadius: 50,
              padding: 5,
              width: 100
            }}><Text style={{ fontWeight: 'bold', display: 'flex', textAlign: 'center' }}>Pineapple</Text></TouchableOpacity>
            
          </View>
       

        <ScrollView horizontal>
          <View style={style.bloc}>
            <View style={style.ct}>

              <View style={style.cts}>
                <View style={style.imgct}>
                  <Image source={require('./assets/coeur.png')}
                    style={{
                      width: 20, height: 20,
                    }}
                  />
                </View>
                <StatusBar style="auto" />
              </View>
              <Image source={require('./assets/orange-png-png_75700.png')}
                style={{
                  width: 171, height: 130, marginTop: -15,
                }}
              />
              <View style={style.cs}>
                <Text style={style.txt}>Orange</Text>
                <Text style={style.txt}>$10</Text>
              </View>

              <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>ADD</Text>
              </TouchableOpacity>

            </View>

            <View style={style.ctss}>

              <View style={style.cts}>
                <View style={style.imgct}>
                  <Image source={require('./assets/coeur.png')}
                    style={{
                      width: 20, height: 20,
                    }}
                  />
                </View>
                <StatusBar style="auto" />
              </View>
              <Image source={require('./assets/raisin.png')}
                style={{
                  width: 200, height: 130, marginTop: -20,
                }}
              />
              <View style={style.cs}>
                <Text style={style.txtx}>Grape</Text>
                <Text style={style.txtx}>$15</Text>
              </View>

              <TouchableOpacity style={style.buttons}>
                <Text style={style.buttonText}>ADD</Text>
              </TouchableOpacity>

            </View>

           
          </View>
        </ScrollView>
        <View style={style.bloccc}>
          <Text style={{ fontWeight: 'bold', fontSize: 28, marginTop: 22 }}>Nearby Shop</Text>
        </View>
        <ScrollView horizontal>
          <View style={style.blocc}>
            <View style={style.part}>
              <View style={{
                width: 80, height: 60, backgroundColor: '#ad397d', justifyContent: 'center', alignItems: 'center', borderRadius: 20
              }}>
                <Image source={require('./assets/boutique.png')}
                  style={{
                    width: 60, height: 40,
                  }}
                />
              </View>
              <View style={style.bloccc}>
                <Text style={{ fontWeight: 'bold' }}>Xenter Shop</Text>
                <Text style={{ fontWeight: 'bold' }}>2356 toltrican Street</Text>
                <Text style={{ fontWeight: 'bold' }}>9A.M - 7 P.M</Text>
              </View>

            </View>
            <View style={style.part}>
              <View style={{
                width: 80, height: 60, backgroundColor: '#ad397d', justifyContent: 'center', alignItems: 'center', borderRadius: 20
              }}>
                <Image source={require('./assets/boutique-en-ligne.png')}
                  style={{
                    width: 50, height: 40,
                  }}
                />
              </View>
              <View style={style.bloccc}>
                <Text style={{ fontWeight: 'bold' }}>Fenter Shop</Text>
                <Text style={{ fontWeight: 'bold' }}>2356 toltrican Street</Text>
                <Text style={{ fontWeight: 'bold' }}>10A.M - 7 P.M</Text>
              </View>

            </View>
            <StatusBar style="auto" />
          </View>
        </ScrollView>

        <StatusBar style="auto" />
      </View>
    </ScrollView >
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 50,
    display: 'flex',

  },
  header: {
    marginTop: '30px',
    height: '6px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  img: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  headerText: {
    padding: 15,
    marginTop: '50px',
    height: '6px',
    width: '500px',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Text: {
    height: '6px',
    width: 220,
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 30,
    
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#292725'
  },
  headerbtn: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: "space-between",
    width: 340,
    marginTop: 5,
    textAlign: 'center',
    alignItems: 'center'

  },
  btn: {
    backgroundColor: 'red',
    borderBottomColor: '#737373',
  },
  ct: {
    backgroundColor: 'rgb(167, 114, 46)',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  imgct: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cts: {
    marginLeft: 150,

  },
  cs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 170,
  },
  button: {
    backgroundColor: '#FF9800',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding:4
  },
  txt: {
    color: '#FF8F06', // Changer la couleur du texte
    fontSize: 16,
  },

  ctss: {
    backgroundColor: 'rgba(100, 18, 231, 0.37)',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
   // transform:[{translateX:-660}]
  },
  buttons: {
    backgroundColor: '#0C2492',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txtx: {
    color: '#0C2492', // Changer la couleur du texte
    fontSize: 16,
  },

  ctx: {
    backgroundColor: '#FFF07B',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonx: {
    backgroundColor: '#FFE200',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txta: {
    color: '#FFE200', // Changer la couleur du texte
    fontSize: 16,
  },

  ctf: {
    backgroundColor: '#FCA0A0',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonf: {
    backgroundColor: '#FF0000',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txtf: {
    color: '#F70505', // Changer la couleur du texte
    fontSize: 16,
  },
  ctm: {
    backgroundColor: '#FBE09A',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonm: {
    backgroundColor: '#FFA500',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txtm: {
    color: '#FFA500', // Changer la couleur du texte
    fontSize: 16,
  },
  bloc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 450,
    marginTop: 20
  },
  blocc: {
    display: 'flex',
    flexDirection: 'row',
    width: 540,
    marginTop: 5,
    padding: 20,
    paddingLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  part: {
    display: 'flex',
    flexDirection: 'row',
    width: 250,
    height: 90,
    borderWidth: 1, // Épaisseur de la bordure
    borderColor: '#FDCECE', // Couleur de la bordure
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  bloccc: {
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    bottom: -30,
    left: 0,
    right: 0,

  },

});


function Profil() {
  return (


    <View style={{backgroundColor:'##d0fcf2'}}>

      <View style={{}}>
      
      <Image source={require('./assets/fresh-vegetables-in-paper-bag-isolated-png.webp')}
                    style={{
                      width: 410, height: 470,transform:[{translateX:-35}]
                    }}
                  />
      </View>


      <View style={{display:'flex',justifyContent:'center',padding:35,alignItems:'center',width:382,height:350,backgroundColor:'#fff',borderRadius:40,}}>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',}}>
      <Text style={{ fontWeight: 'bold', fontSize: 30,marginBottom:40,paddingHorizontal:20 }}>Order Groceries and Get delivered in few minutes</Text>
      </View>
        <View style={{
          width: 130, height: 35, borderWidth: 2,
          borderColor: 'rgb(49, 245, 0)', justifyContent: 'center', alignItems: 'center', borderRadius: 10
        }}>
          <View style={{marginLeft: 10,width: 'auto'}}>
<TouchableOpacity>
      <Text style={{ fontWeight: 'bold', color: 'rgb(49, 245, 0)',}} >Get Started</Text>
      </TouchableOpacity>
          </View>
        </View>

      </View>


      <StatusBar style="auto" />
    </View>
  );

}



function Payment() {
  return (
    <View style={styl.container}>
      <View style={styl.header}>
        <View style={{ borderWidth: 1, borderColor: 'grey', padding: 10, width: 45, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 7 }}>
        <TouchableOpacity>
          <Image source={require('./assets/fleche-fine-contour-vers-la-gauche.png')}
            style={{ width: 20, height: 20, }}
          />
          </TouchableOpacity>
        </View>


        <Image source={require('./assets/sac-en-papier.png')}
          style={{
            width: 55, height: 55,
          }}
        />
        <StatusBar style="auto" />
      </View>


      <View style={styl.headerText}>
        <Text style={styl.Text}>My Order</Text>
      </View>



      <View style={styl.partfint}>
        <View style={styl.part}>

          <Image source={require('./assets/orange-png-png_75700.png')}
            style={{
              width: 40, height: 40,
            }}
          />
        </View>
        <View style={{
          width: 180, height: 60, display: 'flex', flexDirection: 'row', borderRadius: 10,
        }}>
          <View style={{
            width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10
          }}>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold' }}>1X</Text>
            </View>
          </View>
          <View style={{
            justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
          }}>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Orange</Text>
            </View>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$10</Text>
            </View>

          </View>
        </View>

        <View style={{
          width: 55, height: 55, backgroundColor: '#b8b8b8', justifyContent: 'center', alignItems: 'center', borderRadius: 10
        }}><TouchableOpacity>
          <Image source={require('./assets/poubelle-de-recyclage.png')}
            style={{
              width: 45, height: 45,
            }}
          />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styl.partfint}>
        <View style={styl.partf}>

          <Image source={require('./assets/fraises.png')}
            style={{
              width: 50, height: 40,
            }}
          />
        </View>
        <View style={{
          width: 180, height: 60, display: 'flex', flexDirection: 'row', borderRadius: 10,
        }}>
          <View style={{
            width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10
          }}>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold' }}>1X</Text>
            </View>
          </View>
          <View style={{
            justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
          }}>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Strawberry</Text>
            </View>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$12</Text>
            </View>

          </View>
        </View>

        <View style={{
          width: 55, height: 55, backgroundColor: '#b8b8b8', justifyContent: 'center', alignItems: 'center', borderRadius: 10
        }}><TouchableOpacity>
          <Image source={require('./assets/poubelle-de-recyclage.png')}
            style={{
              width: 45, height: 45,
            }}
          />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styl.partfint}>
        <View style={styl.part}>

          <Image source={require('./assets/mangue.png')}
            style={{
              width: 50, height: 40,
            }}
          />
        </View>
        <View style={{
          width: 180, height: 60, display: 'flex', flexDirection: 'row', borderRadius: 10,
        }}>
          <View style={{
            width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10
          }}>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold' }}>1X</Text>
            </View>
          </View>
          <View style={{
            justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
          }}>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Mango</Text>
            </View>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$13</Text>
            </View>

          </View>
        </View>

        <View style={{
          width: 55, height: 55, backgroundColor: '#b8b8b8', justifyContent: 'center', alignItems: 'center', borderRadius: 10
        }}><TouchableOpacity>
          <Image source={require('./assets/poubelle-de-recyclage.png')}
            style={{
              width: 45, height: 45,
            }}
          />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styl.partfint}>
        <View style={styl.partr}>

          <Image source={require('./assets/raisin.png')}
            style={{
              width: 55, height: 40,
            }}
          />
        </View>
        <View style={{
          width: 180, height: 60, display: 'flex', flexDirection: 'row', borderRadius: 10,
        }}>
          <View style={{
            width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10
          }}>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold' }}>1X</Text>
            </View>
          </View>
          <View style={{
            justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
          }}>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Grape</Text>
            </View>
            <View style={styl.bloccc}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$15</Text>
            </View>

          </View>
        </View>

        <View style={{
          width: 55, height: 55, backgroundColor: '#b8b8b8', justifyContent: 'center', alignItems: 'center', borderRadius: 10
        }}>
          <TouchableOpacity>
          <Image source={require('./assets/poubelle-de-recyclage.png')}
            style={{
              width: 45, height: 45,
            }}
          />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: 377, height: 2, backgroundColor: '#b8b8b8', marginTop: 30,transform:[{translateX:-15}] }}>

      </View>

  
      <View style={{
        width: 200, height: 45, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', borderRadius: 10,
        margin: 70, marginTop: 70
      }}>
        <View style={styl.bloccc}>
          <TouchableOpacity>
          <Text style={{ color: '#fff', fontSize: 30, }}>Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{transform:[{translateY:-186}]}}>
        <Text style={{fontSize:30}}>Total Price                  $50</Text>
      </View>




      <StatusBar style="auto" />
    </View>

  );
}
const styl = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
    display: 'flex',
  },
  header: {
    marginTop: '30px',
    height: '6px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  img: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  headerText: {
    padding: 15,
    marginTop: '50px',
    height: '6px',
    width: '500px',
    flexDirection: 'column',
  },
  Text: {
    
    width: 57,
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 22,
    color: '#292725',
    transform:[{translateY:21}]
  },
  headerbtn: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: "space-between",
    width: 420,
    marginTop: 5,
    textAlign: 'center',
    alignItems: 'center'

  },
  btn: {
    backgroundColor: 'red',
    borderBottomColor: '#737373',
  },
  ct: {
    backgroundColor: '#F8D7A6',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  imgct: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cts: {
    marginLeft: 150,

  },
  cs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 170,
  },

  ctx: {
    backgroundColor: '#FFF07B',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonx: {
    backgroundColor: '#FFE200',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txta: {
    color: '#FFE200', // Changer la couleur du texte
    fontSize: 16,
  },

  txtf: {
    color: '#F70505', // Changer la couleur du texte
    fontSize: 16,
  },
  ctm: {
    backgroundColor: '#FBE09A',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonm: {
    backgroundColor: '#FFA500',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txtm: {
    color: '#FFA500', // Changer la couleur du texte
    fontSize: 16,
  },
  bloc: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 370,
    height: 350,
    marginTop: -150,
    marginLeft: -23,
    backgroundColor: '#fff',
    zIndex: -1,
    borderRadius: 50,
    padding: 40,
    paddingTop: 140
  },
  blocc: {
    display: 'flex',
    flexDirection: 'row',
    width: 540,
    marginTop: 5,
    padding: 20,
    paddingLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  part: {
    display: 'flex',
    flexDirection: 'row',
    width: 70,
    height: 60,
    backgroundColor: '#rgb(167, 114, 46)',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  partr: {
    display: 'flex',
    flexDirection: 'row',
    width: 70,
    height: 60,
    backgroundColor: 'rgba(100, 18, 231, 0.37)',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  partf: {
    display: 'flex',
    flexDirection: 'row',
    width: 70,
    height: 60,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },


  partfint: {
    display: 'flex',
    flexDirection: 'row',
    width: 340,
    height: 70,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  bloccc: {
    marginLeft: 10,
    width: 'auto'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    bottom: -30,
    left: 0,
    right: 0,

  },

});




function Product() {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <View>
        <TouchableOpacity>
          <Image source={require('./assets/fleche-fine-contour-vers-la-gauche.png')}
            style={{ width: 30, height: 30, }}
          />
          </TouchableOpacity>
        </View>

       
        <TouchableOpacity>
        <Image source={require('./assets/partager.png')}
          style={{
            width: 40, height: 40,
          }}
        />
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>


      <View style={styles.headerText}>
        <Text style={styles.Text}>Juicy Orange</Text>
        <Text style={{ color: 'rgb(255 136 204)', fontSize: 17 }}>Sweet and Juicy</Text>
      </View>



      <View style={styles.headerbtn}>

        <Text style={{ width: 300, textAlign: 'justify', marginTop: -20 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat aliquam quam repellat dolorem eveniet laudantium!
        </Text>

      </View>
      <View style={styles.partfint}>
        <View style={styles.part}>

          <Image source={require('./assets/coeur.png')}
            style={{
              width: 40, height: 40,
            }}
          />
        </View>
        <View style={{
          width: 200, height: 60, backgroundColor: '#ed0bf5', justifyContent: 'center', alignItems: 'center', borderRadius: 20
        }}>
          <View style={styles.bloccc}>
          <TouchableOpacity>
            <Text style={{ fontWeight: 'bold', color: '#fff',fontSize:22 }}>Find Nearest Store</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Image source={require('./assets/orange-png-png_75700.png')}
        style={{
          width: 250, height: 250, marginLeft: 30
        }}
      />
      <View style={styles.bloc}>
        <Text style={{ fontWeight: 'bold', fontSize: 33 }}>Nutrition Facts</Text>
        <Text style={{ color: 'rgb(118 118 118)', fontSize: 18, marginTop: -50 }}>Fiber  3 g                                             7%</Text>
        <View style={{ width: 310, height: 10, backgroundColor: 'rgb(195 195 195)', borderRadius: 10, marginTop: -65 }}>
          <View style={{ width: 115, height: 10, backgroundColor: '#ff0ec3', borderRadius: 10, }}>
          
          </View>
        </View>

        <Text style={{ color: 'rgb(118 118 118)', fontSize: 18, marginTop: -50 }}>Good sugar   12 g                                  5%</Text>
        <View style={{ width: 310, height: 10, backgroundColor: 'rgb(195 195 195)', borderRadius: 10, marginTop: -65 }}>
          <View style={{ width: 190, height: 10, backgroundColor: '#ff0ec3', borderRadius: 10, }}>
            
          </View>
        </View>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a70eff3f',
    padding: 15,
    paddingTop: 50,
    display: 'flex',

  },
  header: {
    marginTop: '30px',
    height: '6px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  img: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  headerText: {
    padding: 15,
    marginTop: '50px',
    height: '6px',
    width: '500px',
    flexDirection: 'column',
  },
  Text: {
    height: '6px',
    width: 220,
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#292725',
    fontSize:32
  },
  headerbtn: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: "space-between",
    width: 420,
    marginTop: 5,
    textAlign: 'center',
    alignItems: 'center'

  },
  btn: {
    backgroundColor: 'red',
    borderBottomColor: '#737373',
  },
  ct: {
    backgroundColor: '#F8D7A6',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  imgct: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cts: {
    marginLeft: 150,

  },
  cs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 170,
  },
  button: {
    backgroundColor: '#FF9800',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt: {
    color: '#FF8F06', // Changer la couleur du texte
    fontSize: 16,
  },

  ctss: {
    backgroundColor: '#BCC8FF',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttons: {
    backgroundColor: '#0C2492',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txtx: {
    color: '#0C2492', // Changer la couleur du texte
    fontSize: 16,
  },

  ctx: {
    backgroundColor: '#FFF07B',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonx: {
    backgroundColor: '#FFE200',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txta: {
    color: '#FFE200', // Changer la couleur du texte
    fontSize: 16,
  },

  ctf: {
    backgroundColor: '#FCA0A0',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonf: {
    backgroundColor: '#FF0000',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txtf: {
    color: '#F70505', // Changer la couleur du texte
    fontSize: 16,
  },
  ctm: {
    backgroundColor: '#FBE09A',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonm: {
    backgroundColor: '#FFA500',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txtm: {
    color: '#FFA500', // Changer la couleur du texte
    fontSize: 16,
  },
  bloc: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 390,
    height: 350,
    marginTop: -150,
    marginLeft: -23,
    backgroundColor: '#fff',
    zIndex: -1,
    borderRadius: 50,
    padding: 40,
    paddingTop: 140,
    transform:[{translateY:16}]
  },
  blocc: {
    display: 'flex',
    flexDirection: 'row',
    width: 540,
    marginTop: 5,
    padding: 20,
    paddingLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  part: {
    display: 'flex',
    flexDirection: 'row',
    width: 70,
    height: 60,
    borderWidth: 1, 
    borderColor: '#f701d6',
    padding: 10,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  partfint: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    height: 70,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bloccc: {
    marginLeft: 10,
    width: 'auto'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    bottom: -30,
    left: 0,
    right: 0,

  },

});


function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Discover"
      activeColor="#6007ee"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'black' }}
    >
      <Tab.Screen
        name="Home"
        component={Discover}
        options={{
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="card-search" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={33} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
