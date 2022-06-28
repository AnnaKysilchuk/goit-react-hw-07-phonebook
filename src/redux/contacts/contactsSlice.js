import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62b82cf5f4cb8d63df59b1b7.mockapi.io/' }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => `contacts`,
            providesTags: ['Contact'],
        }),

        addContacts: builder.mutation({
            query: item => ({
                url: 'contacts',
                method: 'POST',
                body: item,
            }),
            invalidatesTags: ['Contact'],
        }),

        deleteContacts: builder.mutation({
            query: id => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const { useGetContactsQuery, useAddContactsMutation, useDeleteContactsMutation } =
    contactsApi;
