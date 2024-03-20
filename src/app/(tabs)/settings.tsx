import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';




interface SettingItem {
  title: string;
  value?: string;
  toggle?: boolean;
  onToggleChange?: (isOn: boolean) => void;
}

const SettingsScreen: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Initial dark mode state

  const settings: SettingItem[] = [
    { title: 'Language' },
    { title: 'Dark Mode', toggle: true, onToggleChange: setIsDarkMode },
    { title: 'Account' },
    { title: 'Change Username' },
    { title: 'Invite Friends' },
    { title: 'Log out' },
    { title: 'Help & Support' },
    { title: 'FAQs' },
    { title: 'Join our community' },
    { title: 'Contact us' },
  ];

  // Update styles based on dark mode state (optional)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Update styles based on isDarkMode (replace with your logic)
    // ...
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {settings.map((item) => (
        <View key={item.title} style={styles.settingItem}>
          <Text style={styles.settingText}>{item.title}</Text>
          {item.toggle && (
            <Switch
              trackColor={{ false: '#ddd', true: 'orange' }}
              thumbColor={isDarkMode ? '#fff' : '#f4f4f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleDarkMode}
              value={isDarkMode}
            />
          )}
          {item.value && <Text style={styles.settingValue}>{item.value}</Text>}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    marginVertical: 10,
    padding: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 18,
  },
  settingValue: {
    color: '#888',
  },
});

export default SettingsScreen;
