/**
 * Function returning the build date(as per provided epoch)
 * @param epoch Time in milliseconds
 */
export const getBuildDate = (epoch) => {
    const buildDate = moment(epoch).format("DD-MM-YYY HH:MM");
    return buildDate;
};