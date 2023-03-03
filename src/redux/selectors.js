import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contactsData.contacts.items;
export const selectIsLoading = state => state.contactsData.contacts.isLoading;
export const selectError = state => state.contactsData.contacts.error;
export const selectFilter = state => state.contactsData.filter;

export const selectVisibleContacts = createSelector(
    // Массив входных селекторов
    [selectContacts, selectFilter],
    // Функция преобразователь
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase().trim();
        return contacts?.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    }
);