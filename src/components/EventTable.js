import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const EventTable = ({
  data,
  tableHeader,
  currentPage,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,

}) => {


  const handlePageChange = (page) => {
    onPageChange(page);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (rowsPerPage) => {
    onRowsPerPageChange(rowsPerPage);
  };

  return (
    <DataTable style={styles.dataTable} lazy={true} paginator={true} >
      <DataTable.Header style={{ backgroundColor: 'lightgray' }}>
        {
          tableHeader.map((item, index) =>
            <DataTable.Cell key={index.toString()} style={styles.tableheader}>{item}</DataTable.Cell>
          )
        }
      </DataTable.Header>

      <View style={{ height: 520 }} >
        <ScrollView showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {
            data.map((item, index) =>
              <DataTable.Row key={index.toString()}>
                <DataTable.Cell style={styles.tablecell}>{item.I}</DataTable.Cell>
                <DataTable.Cell style={styles.tablecell}>{item.M}</DataTable.Cell>
                <DataTable.Cell style={styles.tablecell}>{item.E}</DataTable.Cell>
                <DataTable.Cell style={styles.tablecell}>{item.D}</DataTable.Cell>
                <DataTable.Cell style={styles.tablecell}>{item.T}</DataTable.Cell>
              </DataTable.Row>
            )
          }
        </ScrollView>
        <DataTable.Pagination
          page={currentPage}
          numberOfPages={8}
          onPageChange={handlePageChange}
          label={`Page no: ${currentPage + 1}`}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </View>
    </DataTable>
  );
}
const styles = StyleSheet.create({
  dataTable: {
  },
  tableheader: {
    fontWeight: '600',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10
  },
  tablecell: {
    justifyContent: 'center',
  },
})


export default EventTable;

