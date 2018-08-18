from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import datetime

# main method
def main() :

    # array that holds number of days per month
    num_days_per_month = [31,28,31,30,31,30,31,31,30,31,30,31]

    # get the year
    now = datetime.datetime.now()
    year = now.year

    # loop thru months in the year
    for month in range(12):
        # loop thru days in the month
        for date in range(num_days_per_month[month]):
            # base url
            url = "https://www.daysoftheyear.com/days/"

            # dates in slash and hiphen formats, + 1 to acccount for 0-based indexing
            day_with_hiphens = getDate(year, month + 1, date + 1, "-")
            day_with_slashes = getDate(year, month + 1, date + 1, "/")

            # create the url
            url = url + day_with_slashes + "/"

            # read in page's html
            uClient = uReq(url)
            page_html = uClient.read()
            uClient.close()
            # parse the html
            page_soup = soup(page_html, "html.parser")

            # get each holiday's box that has all its info in it
            boxes = page_soup.findAll("div", {"class": "card card-small card-hover u-clickable "})

            # write this day and its holidays into a csv file
            writeFile(day_with_hiphens, boxes)

# return date in yyyy(/-)mm(/-)dd format
def getDate(year, x, date, symbol) :
    # month in 2 digit format
    mm = str(x)
    if x < 10:
        mm = "0" + str(x)
    # date in 2 digit format
    dd = str(date)
    if date < 10:
        dd = "0" + str(date)
    # year
    yyyy = str(year)
    # return date in yyyy(/-)mm(/-)dd format
    return yyyy + symbol + mm + symbol + dd

# write to a file in csv format. param: date, array of holidays boxes
def writeFile(day_with_hiphens, boxes) :
    # create name of file
    filename = "" + day_with_hiphens + ".csv"
    # filewriter: open up a new file 'filename', 'w' for 'write' in it
    f = open(filename, "w")
    # header of file
    header = "img, holiday\n"
    # write header to file
    f.write(header)

    # go thru each special month/holiday's box and get its pic and name
    for box in boxes :
        img = box.a.img.get('src') # grab jpg img of this box
        holiday = box.div.h3.text # grab name of holiday

        # write to csv file
        f.write(img + "," + holiday.replace(",", "|") + "\n") # replace any commas w/ | to make sure no extra columns r produced

    # close the file
    f.close();


if __name__ == '__main__':
    main()
