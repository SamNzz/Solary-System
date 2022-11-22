const texturePath = (planet, texture, ext = '.jpg') =>
    process.env.PUBLIC_URL + '/planets/' + planet + '/' + texture + ext

const addCoordinates = (base, add) =>
    base.map((el, i) => el + add[i])

const capitalize = ([...str]) =>
    str[0].toUpperCase() + str.splice(1, str.length).join('')

export { texturePath, addCoordinates, capitalize }