import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const Table = ({ data, tableHeader, type }) => {

  return (
    <DataTable style={styles.dataTable} lazy={true} paginator={false} >
      <DataTable.Header style={{ backgroundColor: 'lightgray' }}>
        {
          tableHeader.map((item, index) =>
            <DataTable.Cell key={index.toString()} style={styles.tableheader}>{item}</DataTable.Cell>
          )
        }

      </DataTable.Header>
      <View style={{ height: 520 }}>
        <ScrollView showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {
            data.map((item, index) =>
              <DataTable.Row key={index.toString()}>
                {type === 1 ?
                  <>
                    <DataTable.Cell style={styles.tablecell}>{item.C}</DataTable.Cell>
                    <DataTable.Cell style={styles.tablecell}>{item.D}</DataTable.Cell>
                    <DataTable.Cell style={styles.tablecell}>{item.T}</DataTable.Cell>
                  </>
                  : (
                    type === 2 ?
                      <>
                        <DataTable.Cell style={styles.tablecell}>{item.F}</DataTable.Cell>
                        <DataTable.Cell style={styles.tablecell}>{item.D}</DataTable.Cell>
                        <DataTable.Cell style={styles.tablecell}>{item.T}</DataTable.Cell>
                      </>
                      :
                      (
                        type === 4 ?
                          <>
                            <DataTable.Cell style={styles.tablecell}>{item.L}</DataTable.Cell>
                            <DataTable.Cell style={styles.tablecell}>{item.P}</DataTable.Cell>
                            <DataTable.Cell style={styles.tablecell}>{item.A}</DataTable.Cell>
                            <DataTable.Cell style={styles.tablecell}>{item.X}</DataTable.Cell>
                            <DataTable.Cell style={styles.tablecell}>{item.H}</DataTable.Cell>
                            <DataTable.Cell style={styles.tablecell}>{item.B}</DataTable.Cell>
                            <DataTable.Cell style={styles.tablecell}>{item.D}</DataTable.Cell>
                            <DataTable.Cell style={styles.tablecell}>{item.R}</DataTable.Cell>
                            <DataTable.Cell style={styles.tablecell}>{item.N}</DataTable.Cell>
                            <DataTable.Cell style={styles.tablecell}>{item.S}</DataTable.Cell>
                          </>
                          : <></>
                      )
                  )
                }

              </DataTable.Row>
            )
          }
        </ScrollView>
      </View>
    </DataTable >
  );
}
const styles = StyleSheet.create({
  dataTable: {
    borderBottomWidth: 1,
    margin: 0,
    padding: 0
  },
  tableheader: {
    justifyContent: 'center'
  },
  tablecell: {
    justifyContent: 'center',
  },
})


export default Table;

