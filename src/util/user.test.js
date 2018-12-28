import { getUserEmail } from "./user";

describe('getUserEmail() with', () => {
  it('should return Anonymous with falsy object', () => {
    expect(getUserEmail(undefined)).toBe("Anonymous");
    expect(getUserEmail(null)).toBe("Anonymous");
    expect(getUserEmail("")).toBe("Anonymous");
  });

  it('should return Anonymous with falsy email', () => {
    const teamMember = {
      Email: ''
    }

    expect(getUserEmail(teamMember)).toBe("Anonymous");
  });

  it('should return user email when email is provided', () => {
    const teamMember = {
      Email: 'me@email.com'
    }

    expect(getUserEmail(teamMember)).toBe("me@email.com");
  });
});
