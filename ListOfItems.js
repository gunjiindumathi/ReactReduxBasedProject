import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageComponent, } from 'react-native';


const ListOfItems = () => {

    const data = [
        { id: 1, Name: 'Lakshmi', Qualification: 'B.tech', image: { uri: 'https://www.bing.com/ck/a?!&&p=6c0fb03eca90c10eJmltdHM9MTcxMTE1MjAwMCZpZ3VpZD0wOWM3MDZkZC0zZTI2LTZiMTAtMjZiMi0xNTBlM2Y2ZjZhNzcmaW5zaWQ9NTYwOA&ptn=3&ver=2&hsh=3&fclid=09c706dd-3e26-6b10-26b2-150e3f6f6a77&u=a1L2ltYWdlcy9zZWFyY2g_cT1zdHVkZW50JTIwaWNvbiUyMGltYWdlcyUyMGluJTIwcG5nJTIwJkZPUk09SVFGUkJBJmlkPUMzNjI0QzUzNUVENjUzNTlDQkRCNTIxRDkyQTMzMDEzODFGOTg0NDU&ntb=1' } },
        { id: 2, Name: 'Durga', Qualification: 'B.Tech', image: { uri: 'https://www.bing.com/ck/a?!&&p=6c0fb03eca90c10eJmltdHM9MTcxMTE1MjAwMCZpZ3VpZD0wOWM3MDZkZC0zZTI2LTZiMTAtMjZiMi0xNTBlM2Y2ZjZhNzcmaW5zaWQ9NTYwOA&ptn=3&ver=2&hsh=3&fclid=09c706dd-3e26-6b10-26b2-150e3f6f6a77&u=a1L2ltYWdlcy9zZWFyY2g_cT1zdHVkZW50JTIwaWNvbiUyMGltYWdlcyUyMGluJTIwcG5nJTIwJkZPUk09SVFGUkJBJmlkPUMzNjI0QzUzNUVENjUzNTlDQkRCNTIxRDkyQTMzMDEzODFGOTg0NDU&ntb=1' } },
        { id: 3, Name: 'Thulasi', Qualification: 'M.Farm', image: { uri: 'https://www.bing.com/ck/a?!&&p=6c0fb03eca90c10eJmltdHM9MTcxMTE1MjAwMCZpZ3VpZD0wOWM3MDZkZC0zZTI2LTZiMTAtMjZiMi0xNTBlM2Y2ZjZhNzcmaW5zaWQ9NTYwOA&ptn=3&ver=2&hsh=3&fclid=09c706dd-3e26-6b10-26b2-150e3f6f6a77&u=a1L2ltYWdlcy9zZWFyY2g_cT1zdHVkZW50JTIwaWNvbiUyMGltYWdlcyUyMGluJTIwcG5nJTIwJkZPUk09SVFGUkJBJmlkPUMzNjI0QzUzNUVENjUzNTlDQkRCNTIxRDkyQTMzMDEzODFGOTg0NDU&ntb=1' } },
        { id: 4, Name: 'Bhargavi', Qualification: 'B.Farm', image: { uri: 'https://www.bing.com/ck/a?!&&p=6c0fb03eca90c10eJmltdHM9MTcxMTE1MjAwMCZpZ3VpZD0wOWM3MDZkZC0zZTI2LTZiMTAtMjZiMi0xNTBlM2Y2ZjZhNzcmaW5zaWQ9NTYwOA&ptn=3&ver=2&hsh=3&fclid=09c706dd-3e26-6b10-26b2-150e3f6f6a77&u=a1L2ltYWdlcy9zZWFyY2g_cT1zdHVkZW50JTIwaWNvbiUyMGltYWdlcyUyMGluJTIwcG5nJTIwJkZPUk09SVFGUkJBJmlkPUMzNjI0QzUzNUVENjUzNTlDQkRCNTIxRDkyQTMzMDEzODFGOTg0NDU&ntb=1' } }
    ];

    return (
        <View>
            <FlatList style={styles.flatlistItems}>
                data={data}
                KeyExtractor= {(item) => (item.id)}
                renderItem= {({ item }) => (
                    <View style={styles.containerView}>
                        <Text style={styles.id}>item.id</Text>
                        <Text style={styles.Name}>item.name</Text>
                        <Text style={styles.qualification}>item.Qualification</Text>
                        <ImageComponent style={styles.image}> source={item.image}</ImageComponent>
                    </View>
                )}
            </FlatList>
        </View>
    );
};

export default ListOfItems;
const styles = StyleSheet.create({
    containerView: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    flatlistItems: {
        alignItems: 'center',
    },
    id: {
        color: 'black',
        fontStyle: 'normal',
        fontSize: 12
    },
    Name: {
        color: 'black',
        fontStyle: 'normal',
        fontSize: 14
    },
    qualificationualification: {
        color: 'black',
        fontStyle: 'normal',
        fontSize: 14
    },
    image: {
        height: 60,
        width: 60,
        marginHorizontal: 5
    }
});