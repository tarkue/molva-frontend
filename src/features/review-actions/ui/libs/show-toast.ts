import { toast } from "@/shared/ui/toast"

export const showToastIfUserNotAuthorized = (isAuthorized: boolean) => {
    if (!isAuthorized) {
        return () => toast({
            title: "Вы не можете оценивать отзыв без авторизации",
            description: "Пойдём зарегистрируемся?",
            variant: "destructive",
        })
    } 
}