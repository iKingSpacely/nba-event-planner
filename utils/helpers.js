module.exports = {
  format_date: (dateTime) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    const date = new Date(dateTime);
    return date.toLocaleString(undefined, options);
  },
};
