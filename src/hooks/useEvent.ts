import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../api";

export const event = "event";

export const useEvent = () => {
    const client = useQueryClient();

    const getEvents = useQuery({
        queryKey: [event],
        queryFn: () => api.get('event').then(res => res.data),
        gcTime: 1000 * 60 * 10,
        staleTime: 1000 * 60,
    })

    const createEvent = useMutation({
        mutationFn: (data: any) => api.post(`event`, data),
        onSuccess: () => client.invalidateQueries({ queryKey: [event] }),
    })

return {
        getEvents,
        createEvent
    }
}
