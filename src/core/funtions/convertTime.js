export default function converTime(duration)
{
    let hours=duration/3600>9?parseInt(duration/3600):"0"+parseInt(duration/3600)
    let minutes=(duration%3600)/60>9?parseInt((duration%3600)/60):"0"+parseInt((duration%3600)/60)
    let seconds=(duration%3600)%60>9?(duration%3600)%60:"0"+(duration%3600)%60
    return hours+":"+minutes+":"+seconds
}