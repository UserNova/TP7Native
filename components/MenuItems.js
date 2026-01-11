import { SectionList, StyleSheet, Text, View } from 'react-native';

/* ===== Données ===== */
const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

/* ===== Item ===== */
const Item = ({ name, price }) => (
  <View style={styles.itemRow}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
);

/* ===== Séparateur ===== */
const Separator = () => <View style={styles.separator} />;

/* ===== Footer SectionList ===== */
const ListFooter = () => (
  <Text style={styles.listFooterText}>
    All rights reserved by My Restaurant, 2026
  </Text>
);

/* ===== SectionList ===== */
export default function MenuItems() {
  const renderItem = ({ item }) => (
    <Item name={item.name} price={item.price} />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={ListFooter}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

/* ===== Styles ===== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090925',
  },
  sectionHeader: {
    backgroundColor: '#090925',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: '#463d3d',
  },
  itemText: {
    color: '#EDEFEE',
    fontSize: 18,
  },
  itemPrice: {
    color: '#EDEFEE',
    fontSize: 18,
    fontWeight: '600',
  },
  separator: {
    borderBottomWidth: 0.5,
    borderColor: '#555555',
  },
  listFooterText: {
    paddingVertical: 12,
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'italic',
    color: '#EDEFEE',
    backgroundColor: '#320808',
  },
});
