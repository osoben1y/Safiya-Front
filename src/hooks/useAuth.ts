import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api";
import type { ILogin, IOtp, IRegister } from "../types";

export const userKey = "userKey";

export const useAuth = () => {
    const client = useQueryClient();

    const register = useMutation({
        mutationFn: (data: IRegister) => api.post("auth/register", data),
        onSuccess: () => client.invalidateQueries({ queryKey: [userKey] }),
        onError: (error) => console.log(error),
    });

    const verifyOtp = useMutation({
        mutationFn: (data: IOtp) => api.post("auth/verify-otp", data),
        onSuccess: () => client.invalidateQueries({ queryKey: [userKey] }),
        onError: (error) => console.log(error),
    })

    const login = useMutation({
        mutationFn: (data: ILogin) => api.post("auth/login", data),
        onSuccess: () => client.invalidateQueries({ queryKey: [userKey] }),
        onError: (error) => console.log(error),
    })

    return {
        register,
        verifyOtp,
        login
    }
}