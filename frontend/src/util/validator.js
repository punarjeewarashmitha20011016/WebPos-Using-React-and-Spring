import $ from "jquery";

export default function validate(...args) {
    console.log(arguments.length)
    if (args[0].test($(args[1]).val())) {
        $(args[1]).parent('div').children('fieldset').css("border", "solid green");
        console.log(args[2].current)
        /*if (e.key === 'Enter') {
            array[index + 1].focus();
        }*/
        console.log(args[2].current);
        args[2].current.props.disabled = true;
        /*        $("#" + args[2].current.props.id).prop('disabled', true);*/
    } else {
        /*for (let i = 0; i < arguments.length; i++) {
            if (i > 1) {
                $(arguments[i]).prop("disabled", false);
                return true;
            }
        }*/
        return false;
    }
    return false;
}