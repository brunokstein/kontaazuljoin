import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export function BackButton({...rest}: TouchableOpacityProps) {
    return (
        <TouchableOpacity {...rest}>
            <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
    )
}